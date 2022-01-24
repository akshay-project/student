import React, { useState } from 'react';
import Student from './Student';
import Form from './Form'
const StudentFront = () => {
    const user = "student";
    const pass = "student";
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [check, setCheck] = useState(false);
    const [formc, SetForm] = useState(true);
  
    const fun = () => {
      console.log("This is fun");
      if (userName === user && password === pass) {
        setCheck(true);
        SetForm(false);
        setMsg("");
      }
      else {
        setMsg("Your Email or password is Wrong");
      }
    }


    const student = () => {
        if (check === true) {
          return (
            <>
              <Student setCheck={setCheck} SetForm={SetForm} />
            
            </>
          )
        }
        else {
          return (
            <>
    
            </>
          )
        }
      }
    
    
      //For Form
      const formStudent = () => {
        if (formc === true) {
          return (
            <>
              <Form setUserName={setUserName} setPassword={setPassword} fun={fun} msg={msg} />
              
            </>
          )
        }
        else {
          return (
            <>
    
            </>
          )
        }
      }



  return <div>

      <div className="container">
        {/* <Student/> */}
        {student()}
        {formStudent()}
      </div>
  </div>;
};

export default StudentFront;
