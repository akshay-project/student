import React, { useState,useEffect } from 'react';
import axios from 'axios'
const ViewQuiz = () => {
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


    //=======================================All States
    const [marks, setMarks] = useState(0);
    const [running, setRunning] = useState(0);
    const [back1, setBAck1] = useState({ backgroundColor: "grey" });
    const [back2, setBAck2] = useState({ backgroundColor: "grey" });
    const [back3, setBAck3] = useState({ backgroundColor: "grey" });
    const [back4, setBAck4] = useState({ backgroundColor: "grey" });
    const [index, setIndex] = useState(0);
    const [start, setStart] = useState(false);

    //=======================================Functions
    //Next Var
    const next = () => {
        setIndex(index + 1);
        setBAck1({ backgroundColor: "grey" });
        setBAck2({ backgroundColor: "grey" });
        setBAck3({ backgroundColor: "grey" });
        setBAck4({ backgroundColor: "grey" });

    }
    //Submit
    const submit = () => {

        setStart(false);

    }
    const startExam = () => {
        setStart(true);
    }
    //Check
    const check = (selected, correct, no) => {
        if (no === running) {
            if (selected === correct) {
                setMarks(marks + 1);



                if (selected === 1) {
                    setBAck1({ backgroundColor: "green" });
                }
                else if (selected === 2) {
                    setBAck2({ backgroundColor: "green" });
                }
                else if (selected === 3) {
                    setBAck3({ backgroundColor: "green" });
                }
                else if (selected === 4) {
                    setBAck4({ backgroundColor: "green" });
                }
            }
            else {
                if (correct === 1) {
                    setBAck1({ backgroundColor: "green" });
                }
                else if (correct === 2) {
                    setBAck2({ backgroundColor: "green" });
                }
                else if (correct === 3) {
                    setBAck3({ backgroundColor: "green" });
                }
                else if (correct === 4) {
                    setBAck4({ backgroundColor: "green" });
                }


                if (selected === 1) {
                    setBAck1({ backgroundColor: "red" });
                }
                else if (selected === 2) {
                    setBAck2({ backgroundColor: "red" });
                }
                else if (selected === 3) {
                    setBAck3({ backgroundColor: "red" });
                }
                else if (selected === 4) {
                    setBAck4({ backgroundColor: "red" });
                }
            }
            setRunning(running + 1);
        }

    }

    //=======================================All Dode
    //Main Code
    const mainCode = () => {
        if (start === false) {
            return (
                <>
                    <div className="container">
                        <div className="text-center" style={{ marginTop: "100px" }}>
                            <button onClick={() => { startExam() }} type="button" className="btn btn-success">Start Exam</button>
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className='container'>
                        <h1 className='text-center'>Total Marks : {marks}</h1>
                        <div className="row">
                            <h1>{data[index].question}</h1>
                            <div className="row">
                                <h4 onClick={() => { check(1, data[index].correct, index) }} style={back1}> {data[index].answers[0]}</h4>
                                <h4 onClick={() => { check(2, data[index].correct, index) }} style={back2}> {data[index].answers[1]}</h4>
                                <h4 onClick={() => { check(3, data[index].correct, index) }} style={back3}> {data[index].answers[2]}</h4>
                                <h4 onClick={() => { check(4, data[index].correct, index) }} style={back4}> {data[index].answers[3]}</h4>
                            </div>
                            <div >
                                {bottom()}
                            </div>
                        </div>
                    </div>
                </>
            )
        }

    }


    //For bottom Buttons
    const bottom = () => {
        if (index !== data.length - 1) {
            return (
                <>
                    <button onClick={() => { next() }} style={{ float: "right" }} type="button" className="btn btn-success">Next</button>
                </>
            )
        }
        else {
            return (
                <div className="text-center">
                    <button onClick={() => { submit() }} type="button" className="btn btn-success">Submit Marks</button>
                </div>
            )
        }
    }


    //=======================================Our Data
    // const data = [
    //     { question: "My First Questions", answers: ["1st", "2nd", "3rd", "4th"], correct: 1 },
    //     { question: "My Second Questions", answers: ["First", "2nd", "3rd", "4th"], correct: 2 }
    // ]

    return <div>
        <h1 className='text-center'>Quiz</h1>

        {mainCode()}
    </div>;
};

export default ViewQuiz;
