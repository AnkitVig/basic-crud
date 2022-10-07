import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import http from "../http"

export default function Edit(props) {
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
                        <label>First Name</label>
                        <input type="text" name="first_name" className="form-control mb-2"
                            value={inputs.first_name || ''}
                            onChange={handleChange}
                        />

                        <label>Last Name</label>
                        <input type="text" name="last_name" className="form-control mb-2"
                            value={inputs.last_name || ''}
                            onChange={handleChange}
                        />


                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />

                        <label>Phone</label>
                        <input type="tel" name="phone" className="form-control mb-2"
                            value={inputs.phone || ''}
                            onChange={handleChange}
                        />

                        <label>Program</label>
                        <input type="text" name="program" className="form-control mb-2"
                            value={inputs.program || ''}
                            onChange={handleChange}
                        />

                        <label>updated_at</label>
                        <input type="datetime-local" name="updated_at" className="form-control mb-2"
                            value={inputs.updated_at || ''}
                            onChange={handleChange}
                        />

                        <label>created_at</label>
                        <input type="datetime-local" name="created_at" className="form-control mb-2"
                            value={inputs.created_at || ''}
                            onChange={handleChange}
                        />


                        <button type="button" onClick={submitForm} className="btn btn-info mt-2"> Update </button>
                    </div>
                </div>
            </div>
        </div>
    )
}