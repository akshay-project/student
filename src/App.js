import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

import AdminFront from './component/admins/AdminFront';
import StudentFront from './component/students/StudentFront';
import FrontMain from './component/FrontMain';


const App = () => {

  const [ad, setAdmin] = useState(false);
  const [fr, setFront] = useState(true);
  const [st, setStudent] = useState(false);
  const adminFun = () => {
    console.log("This is a function");
      setAdmin(true);
      setFront(false);
  }
  const studentFun = () => {
    console.log("This is a function");
      setStudent(true);
      setFront(false);
  }

  const admin = () => {
    if (ad === true) {
      return (
        <>
          <AdminFront />
         
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
  //For Student
  const student = () => {
    if (st === true) {
      return (
        <>
          <StudentFront />
         
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
  //For Front
  const front = () => {
    if (fr === true) {
      return (
        <>
          <FrontMain adminFun={adminFun} studentFun={studentFun}/>
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


  //This is a main return
  return (
    <>
      {/* <AdminFront/> */}
      {/* <StudentFront/> */}
      {admin()}
      {front()}
      {student()}
     
    </>
  )
}

export default App
