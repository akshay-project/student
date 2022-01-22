import React from 'react'

const Form = ({ setPassword, setUserName, fun, msg }) => {
    return (
        <div><br /><br />
            <h1 className='text-center'>Welcome Student Login</h1> 
            <br /><br />
            <div style={{marginLeft: "auto", marginRight: "auto", width:"50%", border:"2px solid"}}>
                <form style={{marginLeft:"10%", marginRight:"12%", marginTop:"10%", marginBottom:"10%"}}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={e => setUserName(e.target.value)}
                            type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

                    </div>
                    <small id="emailHelp" className="form-text text-danger">{msg}</small>
                    <br />
                </form>
            </div> <br />
            <div className='text-center'>
                <button onClick={() => fun()} type="submit" className="btn btn-primary">Submit</button>
            </div>

        </div>
    )
}

export default Form
