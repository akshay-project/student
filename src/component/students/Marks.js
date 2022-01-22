import React from 'react'
// import { Link } from 'react-router-dom';
const Marks = () => {
    return (
        <div>
            <h1 className='text-center'>Marks</h1>
            {/* <Link to='/'>
                                <button type="button" className="btn btn-primary">Home</button>
                            </Link> */}

            {/* <button type="button" className="btn btn-primary"> <Link to='/'>Homw</Link></button> */}
            {/* <Link to="/">
                <Button renderAs="button">
                    <span>Login</span>
                </Button>
            </Link> */}
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="card " style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">COP</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">09-09-2021 to 25-09-2021</h6> */}

                                <form>
                                    <div className="form-group">
                                        <p><b>Interal Marks : </b>18</p>
                                        <p><b>End Module : </b>55</p>
                                        <hr />
                                        <p><b>Total Marks: </b>73</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <div className="card " style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">Database Technologies</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">09-09-2021 to 25-09-2021</h6> */}

                                <form>
                                    <div className="form-group">
                                        <p><b>Interal Marks : </b>18</p>
                                        <p><b>End Module : </b>55</p>
                                        <hr />
                                        <p><b>Total Marks: </b>73</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <br /><br />
            {/* Anather Row */}
                <div className="row">
                    <div className="col-5">
                        <div className="card " style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">DATA STRUCTURE</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">09-09-2021 to 25-09-2021</h6> */}

                                <form>
                                    <div className="form-group">
                                        <p><b>Interal Marks : </b>18</p>
                                        <p><b>End Module : </b>55</p>
                                        <hr />
                                        <p><b>Total Marks: </b>73</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-5">
                        <div className="card " style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title">WPT</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">09-09-2021 to 25-09-2021</h6> */}

                                <form>
                                    <div className="form-group">
                                        <p><b>Interal Marks : </b>18</p>
                                        <p><b>End Module : </b>55</p>
                                        <hr />
                                        <p><b>Total Marks: </b>73</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default Marks
