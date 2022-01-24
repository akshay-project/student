import React, { useState,useEffect } from 'react'
import axios from 'axios'
const ViewNoti = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])
                                                                
    // React.useEffect(() => {
    //     const fetchLocation = async () => {
    //         await fetch("http://localhost:1111/notifications/show")
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setData(data);
    //                 console.log(data);
    //             });
    //     };
    //     fetchLocation();
    // }, []);


    //Get Data
    const loadUsers = async () => {
        
        const result = await axios.get("https://student-akshay.herokuapp.com/notifications/show");
        console.log(result);
        setData(result.data);
        console.log("This is Function");
        
    };


    //Delete User
    const deleteUser=async id =>{

        await axios.delete(`https://student-akshay.herokuapp.com/notifications/delete/${id}`);
        loadUsers();
       }
    return (
        <div>
            <h1 className='text-center'>This is ViewNotifications</h1>

            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Notifications</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                                data.map((user,index)=>(    
                                    <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.notifications}</td>
                                    <td>{<i className="bi bi-pencil"></i>}</td>
                                    <td onClick={()=>deleteUser(user._id)}>{<i className="bi bi-archive"></i>}</td>
                                    </tr>
                                ))
                            }
                           
                       
                       
                    </tbody>
                </table>
               
        </div>
    )
}

export default ViewNoti
