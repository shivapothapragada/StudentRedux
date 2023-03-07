import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteStudents, viewAllStudents } from '../studentactions/StudentActions';

const ViewAll = () => {
    const [students, setStudent] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const state = useSelector(state => state);
    useEffect(() => {
        axios.get("http://localhost:3001/students").then(res => setStudent(res.data));
        dispatch(viewAllStudents());
    }, [])


    const addStudent = () => {

        navigate('/add');
    }

    const deleteStu = (id) => {

        axios.delete("http://localhost:3001/students/" + id).then(window.location.reload());

        dispatch(deleteStudents(id));

    }

    const editStudent = () => {

        navigate('/e')
    }
    const viewStudent = () => {

    }
    return (
        <div className='container'>
            <h1 style={{ textAlign: "center" }}></h1>
            <table className='table table-hover table-dark table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th colSpan={3}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((p, i) =>
                            <tr key={i}>
                                <td >{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.course}</td>
                                <td>
                                    <button onClick={() => { editStudent() }} className='btn btn-info' >Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => { deleteStu(p.id) }} className='btn btn-primary'>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => { viewStudent() }} className='btn btn-warning'>View</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>

            </table>
            <button className='btn btn-info' onClick={(e) => { addStudent(e) }}>add </button>
        </div>
    )
}

export default ViewAll
