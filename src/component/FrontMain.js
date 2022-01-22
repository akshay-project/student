
import React from 'react';

const FrontMain = ({adminFun, studentFun}) => {
  return <div>
 <h1 className='text-center'>Welcome to IACSD Login</h1>
      <br />
      <div className='container'>

        <div className="card w-50" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Admin</h5>
           
            <div className='text-center'>
              <button onClick={()=>adminFun()} className="btn btn-primary">Click</button>
            </div>
          </div>

      
        </div>


          <br /><br />

        <div className="card w-50" style={{ marginLeft: "auto", marginRight: "auto"}}>
          <div className="card-body">
            <h5 className="card-title text-center">Teacher</h5>
           
            <div className='text-center'>
              <button className="btn btn-primary">Click</button>
            </div>
          </div>

      
        </div>

<br /><br />


        <div className="card w-50" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="card-body">
            <h5 className="card-title text-center">Student</h5>
           
            <div className='text-center'>
              <button onClick={()=>studentFun()} className="btn btn-primary">Click</button>
            </div>
          </div>

      
        </div>

      </div>


  </div>;
};

export default FrontMain;
