import React, { useState } from 'react';

import Admin from './Admin'
import Form from './Form';
// import TryAnather from './component/admins/TryAnather'
const AdminFront = () => {
    const user = "admin";
    const pass = "admin";
    const [userName, setUserName ] = useState("");
    const [password, setPassword ] = useState("");
    const [msg,setMsg] = useState("");
    const [check, setCheck] = useState(true);
    const [formc, SetForm] = useState(false);
    // const [num1, setNum1] = useState(1);
    // const [num2, setNum2] = useState(1);
  
    const fun = () => {
      console.log("This is fun");
      if(userName===user && password===pass){
        setCheck(true);
        SetForm(false);
        setMsg("");
      }
      else{
        setMsg("Your Email or password is Wrong");
      }
    }
  
    
  //For Admin
    const admin = () => {
      if (check === true) {
        return (
          <>
            <Admin setCheck={setCheck} SetForm={SetForm}/>
           
          </>
        )
      }
      else  {
        return (
          <>
  
          </>
        )
      }
    }
  
  //For Form
    const formAdmin = () => {
      if (formc === true) {
        return (
          <>
            <Form setUserName={setUserName} setPassword={setPassword} fun={fun} msg={msg}/>
            
          </>
        )
      }
      else{
        return (
          <>
            
          </>
        )
      }
    }
    return (
        <>
          <div className="container">
            <br /><br />
            {admin()}
    
            {formAdmin()}
    
    
            {/* <Try/>
            <TryAnather/> */}
          </div>
        </>
      )
};

export default AdminFront;
