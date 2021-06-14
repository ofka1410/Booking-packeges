const PORT = process.env.PORT || 7000
const express= require('express')
const app=express()
var cors = require('cors')
const path=require('path')
app.use(cors())
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
//connection to front
// app.use(express.static('public/build'))
//   app.get('/',(req,res)=>{
//   res.sendFile(path.join(__dirname,"public/build","index.html"))
// })

 const { Sequelize} = require('sequelize')

const sequelize = new Sequelize ('vacation_project',"root","",{
    //host:"localhost",
    host: "127.0.0.1:3306",
    dialect:'mysql'
})

async function checkConenction(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }
    checkConenction()

    //-----requiers , conection to logics------
         
       //modules
       const User =require('./Moduels/userModule')
        const Vacations =require('./Moduels/Vacations')
        const Follow =require('./Moduels/Follow')
        
        //import posts requests
        const mailer =require('./postRequests/email')
        const signup =require('./postRequests/signUp')
        const vacation =require('./postRequests/AddVacation')
        const follow =require('./postRequests/FollowPost')
        const Unfollow =require('./postRequests/UnFollow')

        //import put requests
        const dellete =require('./putRequests/DeleteVacations')
        const changeing =require('./putRequests/EdditVacation')
       
        //import get requests
        const getGraphData =require('./getRequests/getGraphData')
        const vacations_follow =require('./getRequests/getFollows')
        const search =require('./getRequests/search')
    
        //--------functions---------

    //user conection
    app.post('/addUser',async(req,res)=>{
        const data= req.body
        try{
          const status= await signup.signup(User.User,data)
          res.send({status:status})  
        }
        catch(err){
          console.log(err)
        }
            
    })
    app.get('/addUser',async (req,res)=>{
        try{
          const users= await User.User.findAll()
          console.log(users)
          if(users){
            res.send(users)
          }
          else{
            res.send({staus:'cannot found'})
          }
        }
        catch(err){
      console.log(err)
        }
      
      })
      app.post('/passwordrepeat',async (req,res)=>{
        const email= req.body.email
        const data =req.body
        try{
          const success= await mailer.emailSend(User.User,data,email)
          res.send({status:success})
        }
        catch(err){
          console.log(err)
        }
      
        
      })

      //admin vacations
      app.post('/addVacition',async(req,res)=>{
        const data= req.body
        try{
          vacation.AddVacation(data,Vacations.Vacations)
          res.send({status:Math.floor(Math.random() * 1000)})    
        }
        catch(err){
          console.log(err)
        }
         
    })
    app.get('/addVacition',async(req,res)=>{
        try{
          const vacations =await Vacations.Vacations.findAll()
          res.send(vacations)
        }
        catch(err){
          console.log(err)
        }
      })

      app.delete('/deleteVacation',async(req,res)=>{
        const data =req.body
        try{
          dellete.dellete(data,Vacations.Vacations)
          res.send({status:Math.floor(Math.random() * 1000)})
        }
        catch(err){
    console.log(err)
        }
        })

        app.get('/FollowAction',async(req,res)=>{
            try{
              const data =await getGraphData.graph(Follow.Follow,Vacations.Vacations)
              res.send(data)
            }
            catch(err){
              console.log(err)
            }
          
          })
    
        //admin update vacation
        app.put('/changeVacation',async(req,res)=>{
            const data =req.body
            try{
              changeing.edit(data,Vacations.Vacations)
              res.send({status:Math.floor(Math.random() * 1000)})
            }
            catch(err){
              console.log(err)
            }
           
            })

            //userPage functions
            app.get('/getPostFollowers/:post',async(req,res)=>{
                const data= req.params.post
                try{
                  const vacation = await Vacations.Vacations.findOne({where:{name:data}})
                  const followers = await Follow.Follow.findAll({where:{vacation_id:vacation.id}})
                   res.send(followers)
                }
                catch(err){
                  console.log(err)
                }
                
                    })
            app.get('/FollowAction/:username',async(req,res)=>{
                const data= req.params.username
                try{
                  const follow= await vacations_follow.follows(data,Vacations.Vacations,User.User,Follow.Follow)
                  res.send(follow)
                }
                catch(err){
                console.log(err)
                }
           
                })

            app.post('/FollowAction',async(req,res)=>{
                const data= req.body
                try{
                  follow .followVacation(data,Vacations.Vacations,User.User,Follow.Follow)
                  res.send({status:data.description})
                }
                catch(err){
                  console.log(err)
                }
            })
            
            app.post('/UNFollowAction',async(req,res)=>{
                const data= req.body
                try{
                  Unfollow.UnFollow(data,Vacations.Vacations,User.User,Follow.Follow)
                  res.send({status:data.description})
                }
                catch(err){
                  console.log(err)
                }
            })
           
            app.get('/searchAction/:obj',async(req,res)=>{
                const data=JSON.parse(req.params.obj)
                try{
                 const vacation = await search.search(Follow.Follow,Vacations.Vacations,User.User,data)
                 console.log(vacation)
                res.send(vacation)
                }
                catch(err){
                  console.log(err)
                }
              
                  })

            
     app.listen(PORT,()=>{
       console.log("the server is listening on port 7000")
       })