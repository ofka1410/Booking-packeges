import React,{useState} from 'react'
import AdminNav from '../AdminNav'
import Graph from '../chart/Graph'
import AdminHome from './AdminHome'
import {
    BrowserRouter as Router,
    Switch,
    Route,} from "react-router-dom";
export default function Admin({token,setToken}) {
    const[refresh,setRefresh]=useState()
    return (
        <Router>
            <div>
        <div>
        <AdminNav
        setRefresh={setRefresh}
        setToken={setToken}
        token={token}/>
    </div>
     <Switch>
       <Route path='/Graph'>
        <Graph/>
     </Route>
    <Route path='/'>
   <AdminHome
  refresh={refresh}
  setRefresh={setRefresh}
   setToken={setToken}/>
    </Route>

   </Switch>
    </div>
    </Router>
    
    )
}
