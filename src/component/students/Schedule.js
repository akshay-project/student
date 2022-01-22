import React, { useState, useEffect } from 'react'
import axios from 'axios'
const arr = []
const Schedule = () => {
    const [allData, setAllData] = useState(arr);
    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])


    const loadUsers = async () => {

        const result = await axios.get("http://localhost:1111/schedule/show");
        console.log(result);
        setAllData(result.data);
        console.log("This is Function");

    };
    const refresh = () => {
        loadUsers();
    }
    return (
        <div>
            <h1 className='text-center'>Schedule</h1>
            <div style={{ float: "right" }}>
                <i onClick={() => refresh()} className="bi bi-arrow-clockwise"></i>
            </div>
            <>{
                allData.map((user, index) => (
                    <div key={user._id}>
                        <h1 className='text-center'>{user.date}</h1>
                        <table className="table table-bordered table-dark" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Module</th>
                                    <th scope="col">Faculty</th>
                                    <th scope="col">Timing</th>
                                    <th scope="col">Links</th>
                                    <th scope="col">Pass</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.day.map((use, ind) => (
                                        <tr key={(ind + 100)}>
                                            <td >{ind + 1}</td>
                                            <td>{use.module}</td>
                                            <td>{use.faculty}</td>
                                            <td>{use.time}</td>
                                            <td>{use.zoom}</td>
                                            <td>{use.pass}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ))
            }
            </>
        </div>
    )
}

export default Schedule
