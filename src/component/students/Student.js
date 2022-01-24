import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar';

import Marks from './Marks';
import Schedule from './Schedule';
import Notfound from './Notfound';
import Notifications from './Notifications';
import Profile from './Profile';

import UploadAss from './UploadAss';
import ViewQuiz from './ViewQuiz';
// import Student from './Student';

const Student = ({ setCheck, SetForm }) => {
    const logOut = () => {
        console.log("This is fun");
          setCheck(false);
          SetForm(true);
      }

      
    return (
        <div>
            <h1 className='text-center'>This is a student</h1>
            <br />
            <div style={{ float: "right" }}>
                
                <button onClick={() => logOut()} type="button" className="btn btn-danger">Log Out</button>

            </div><br />
            <br />
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/marks' element={<Marks />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/notification' element={<Notifications />} />
                <Route path='/profile' element={<Profile />} />
                
                <Route path='/uploadassignment' element={<UploadAss />} />
                <Route path='/quizview' element={<ViewQuiz />} />
                <Route path="*" element={<Notfound />} />
            </Routes>



        </div>
    )
}

export default Student
