import React, { useState, useEffect } from 'react'
import axios from 'axios'
const arr = []

const ViewSchedule = () => {

    // const data = [
    //     { date: "12/12/2222", day: [{ module: "web base java theory", faculty: "Madhura Mam", zoom: "123456", pass: "09876", timing: "2am - 4pm" }, { module: "web base java Pr", faculty: "Madhura Mam & All", timing: "4am - 6pm" }, { module: "web base java theory ALL", faculty: "No Madhura Mam & All", timing: "6am - 10pm" }] },
    //     { date: "13/12/2222", day: [{ module: "web base java theory", faculty: "Madhura Mam", timing: "2am - 4pm" }, { module: "web base java Pr", faculty: "Madhura Mam", timing: "2am - 4pm" }, { module: "web base java theory ALL", faculty: "Madhura Mam", timing: "2am - 4pm" }] },
    //     { date: "14/12/2222", day: [{ module: "web base java theory", faculty: "Madhura Mam", timing: "2am - 4pm" }, { module: "web base java Pr", faculty: "Madhura Mam", timing: "2am - 4pm" }, { module: "web base java theory ALL", faculty: "Madhura Mam", timing: "2am - 4pm" }, { module: "web base java theory ALL", faculty: "Madhura Mam", timing: "2am - 4pm" }] }
    // ]


    const [allData, setAllData] = useState(arr);
    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])

    const loadUsers = async () => {

        const result = await axios.get("https://student-akshay.herokuapp.com/schedule/show");
        console.log(result);
        setAllData(result.data);
        console.log("This is Function");

    };
    const deleteUser = async id => {

        await axios.delete(`https://student-akshay.herokuapp.com/schedule/delete/${id}`);
        loadUsers();
    }
    // var data =[ {
    //     code: 42,
    //     items: [{
    //         id: 1,
    //         name: 'foo'
    //     }, {
    //         id: 2,
    //         name: 'bar'
    //     }]
    // }];

    return (
        <>
        {
            allData.map((user, index) => (
                <div key={index}>
                    <h1 className='text-center'>{user.date}</h1>
                    <div onClick={() => deleteUser(user._id)}>{<i className="bi bi-archive"></i>}</div>
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
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
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
    )
}

export default ViewSchedule
