import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>





                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {/* <a className="nav-link" href="/">Home</a> */}


                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/'>
                                <button type="button" className="btn btn-primary">Home</button>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/notification'>
                                <button type="button" className="btn btn-primary">Notifications</button>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/schedule'>
                                <button type="button" className="btn btn-primary">Schedule</button>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/marks'>
                                <button type="button" className="btn btn-primary">Marks</button>
                            </Link>
                        </li>

                       
                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/quizview'>
                                <button type="button" className="btn btn-primary">Mock Test</button>
                            </Link>
                        </li>
                       
                      
                      
                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/uploadassignment'>
                                <button type="button" className="btn btn-primary">Assignment</button>
                            </Link>
                        </li>
                        <li className="nav-item active" style={{marginLeft:"10px"}}>
                            <Link to='/profile'>
                                <button type="button" className="btn btn-primary">Profile</button>
                            </Link>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
