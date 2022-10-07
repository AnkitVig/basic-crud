import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import http from "../http"

export default function View(props) {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    const fetchStudent = () => {
        http.get('/students/' + id + '/edit').then((res) => {
            setInputs({
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                email: res.data.email,
                phone: res.data.phone,
                program: res.data.program,
                updated_at: res.data.updated_at,
                created_at: res.data.created_at,
            });
        });
    }

    useEffect(() => {
        fetchStudent();
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitForm = () => {
        http.put('/students/' + id, inputs).then((res) => {
            navigate('/');
        })

    }
    return (
        <div>
            <h2> Edit User</h2>
            <div className="row">
                <div className="col-sm-6 justify-content-center">
                    <div className="card p-4">
                        <h2>First Name</h2>
                        <p>{inputs.first_name}</p>
                        <h2>Last Name</h2>
                        <p>{inputs.last_name}</p>

                        <h2>Email</h2>
                        <p>{inputs.email}</p>

                        <h2>Phone</h2>
                        <p>{inputs.phone}</p>

                        <h2>Program</h2>
                        <p>{inputs.program}</p>

                        <h2>Updated at</h2>
                        <p>{inputs.updated_at}</p>

                        <h2>Created at</h2>
                        <p>{inputs.created_at}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}