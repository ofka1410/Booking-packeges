import React from 'react'
import MainNav from './MainNav'
import HomePage from './vacationUsers/HomePage'
import LogOut from '../adminComponent/LogOut'
import {
    BrowserRouter as Router,
    Switch,
    Route,} from "react-router-dom";

export default function Main({setToken}) {
   
    return (
        <Router>
      <div style={{textAlign:'center'}}>
        <div>
       <MainNav
       setToken={setToken}/>
    </div>
        </div>
        <Switch>
        <Route path='/LogOut'>
          <LogOut
            setToken={setToken}/>
             </Route>
           <Route path='/'>
            <HomePage/>
             </Route>
             </Switch>
               </Router>
  
          )
           }
