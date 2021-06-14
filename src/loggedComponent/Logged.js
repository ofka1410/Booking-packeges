import React from 'react'
import LogIn from './LogIn'
import LogUp from './LogUp'
import './Log.css'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
  
export default function Loged({setToken,token}) {
    return (
  <Router>
  <div className='all-loggedWarper'>
<Switch>
<Route
  path='/LogUp'>
<LogUp
/>
  </Route>
  <Route
  path='/'>
        <LogIn
           setToken={setToken}
                  token={token}
         />
   </Route>
    </Switch>    
        </div>
        </Router>  
    )
}