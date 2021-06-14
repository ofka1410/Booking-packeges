import './App.css';
import Loged from './loggedComponent/Logged'
import Main from './mainComponent/Main'
import Admin from './adminComponent/admin_homePages/Admin'
import  {useState,useEffect} from 'react';


function App() {
  const[token,setToken]=useState('')
  useEffect(async()=>{
    const user= (localStorage.getItem('userNow'))
    console.log(user)
     if (user!==null){
       setToken(user)
     }
    },[])
    if(!token){
      return(
        <div  className="App">
  <Loged
  setToken={setToken}
  token={token}/>
        </div>
      )
    }
    else if(token=="admin"){
return(
  <div>
    <Admin
       setToken={setToken}
       token={token}/>
  </div>
)
    }
    else{
      return (
        <div className="App">
         <Main
         setToken={setToken}
         token={token}/>
        </div>
      );
    }    
}

export default App;
