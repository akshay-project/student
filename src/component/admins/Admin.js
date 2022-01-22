import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../admins/Navbar'
import Add from '../admins/Add'
import ViewNoti from './ViewNoti';
import ViewSchedule from './ViewSchedule';
import AddSchedule from './AddSchedule';
import Home from './Home';
// import Try from './Try';
const Admin = ({ setCheck, SetForm }) => {


    const logOut = () => {
        console.log("This is fun");
          setCheck(false);
          SetForm(true);
      }


    return (
        <div>
            <h1 className='text-center'>This is Admin</h1>
            <div style={{ float: "right" }}>
               
               <button onClick={()=>logOut()} type="button" className="btn btn-danger">Log Out</button>
          
       </div><br /><br />
            <Navbar/>
            <br />
           
            <Routes>
            <Route exact path='/' element={<Home/>} />
                <Route exact path='/addnotifications' element={<Add/>} />
                <Route path='/viewnotifications' element={<ViewNoti/>} />

                <Route path='/viewschedule' element={<ViewSchedule/>} />
                <Route path='/addschedule' element={<AddSchedule/>} />
               
                {/* <Route exact path="/users/add/:id" component={Try}/> */}
                {/* <Route path='/marks' element={<Marks />} />
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/notification' element={<Notifications />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/mockt est' element={<MockTest />} />
                <Route path="*" element={<Notfound />} /> */}
            </Routes>
        </div>
    )
}

export default Admin
