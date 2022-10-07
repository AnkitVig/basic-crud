import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../http"

export default function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchAllStudents();
    }, [])

    const fetchAllStudents = () => {
        http.get('/students').then(res => {
            setStudents(res.data);
        })
    }

    const deleteStudent = (id) => {
        http.delete('/students/' + id).then(res => {
            fetchAllStudents();
        })
    }

    return (
        <div>
            <h2>Student Listing...</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Program</th>
                        <th>updated_at</th>
                        <th>created_at</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{++index}</td>
                            <td>{student.first_name}</td>
                            <td>{student.last_name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.program}</td>
                            <td>{student.updated_at}</td>
                            <td>{student.created_at}</td>
                            <td className="d-inline-flex p-2">
                                <Link className="btn btn-info" to={{ pathname: "/edit/" + student.id }}>Edit</Link>
                                <Link className="btn btn-primary" to={{ pathname: "/view/" + student.id }}>View</Link>
                                <button type="button" className="btn btn-danger" onClick={() => { deleteStudent(student.id) }}>Delete</button>
                            </td>
                        </tr>

                    ))}

                </tbody>


            </table>
        </div>
    )
}