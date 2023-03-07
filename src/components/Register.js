import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addStudents } from "../studentactions/StudentActions";

const Register = () => {

    // const state = useSelector((state) => state);

    const [student, setStudent] = useState({
        id: "",
        name: "",
        course: ""
    })
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const addStd = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/students", student);
        // alert("Added Successfully" + student.id + student.name + student.course);
        dispatch(addStudents(student));
        // alert("from jbk");
        navigate('/');


    }
    return (
        <div className='container'>

            <div className='card'>
                <div className='card-header'>
                    <h1 style={{ textAlign: "center" }}>Student Register Form</h1>
                </div>
                <div className='card-body'>
                    <input className="form-control" type="text" placeholder='Enter Your Student ID' onChange={(e) => { setStudent({ ...student, id: e.target.value }) }} /><br />
                    <input className="form-control" type="text" placeholder='Enter Your Student Name' onChange={(e) => { setStudent({ ...student, name: e.target.value }) }} /><br />
                    <input className="form-control" type="text" placeholder='Enter Your Student Course' onChange={(e) => { setStudent({ ...student, course: e.target.value }) }} />

                </div>
            </div>
            <br />
            <button className='btn btn-primary' onClick={(e) => { addStd(e) }}>Add</button>
        </div>
    )
}

export default Register
