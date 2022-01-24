import React, { useState,useEffect } from 'react';
import axios from 'axios'

const ViewQuizAdmin = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("Hi!, kaisa hai bro!");
        loadUsers();
    }, [])
                                                                

    //Get Data
    const loadUsers = async () => {
        
        const result = await axios.get("https://student-akshay.herokuapp.com/quiz/show");
        console.log(result);
        setData(result.data);
        console.log("This is Function");
        
    };
    const deleteUser = async id => {

        await axios.delete(`https://student-akshay.herokuapp.com/quiz/delete/${id}`);
        loadUsers();
    }
  return <div>
      <h1 className='text-center'>View All Quiz Added</h1>
      <br />
        <div className="container">
            {
                data.map((user,index)=>(
                    <div  key={index}>
                         <div onClick={() => deleteUser(user._id)}>{<i className="bi bi-archive"></i>}</div>
                        <h1 style={{border:"1px solid"}}>{index+1}) {user.question}</h1>
                        <br />
                        {
                            user.answers.map((us,ind)=>(
                                <div key={ind+1212}>
                                    <h3>{ind+1}) {us}</h3>
                                </div>
                            ))
                        }
                        <hr />
                        <h3>Correct Answer {user.correct}</h3>
                        <hr /><hr />
                        <br /><br />
                    </div>
                ))
            }
        </div>

  </div>;
};

export default ViewQuizAdmin;
