import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = props => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        bugtitle: "",
        description: "",
        resolved: false,
        resdescription: ""
    });

    const [errors, setErrors] = useState({});

    const onChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onCheckedHandler = e => {
        setForm({...form, [e.target.name]: e.target.checked})
    }

    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/bugreports/create", form)
            .then(res => {
                if(res.data.error) {
                    console.log("Something went wrong creating a bug report")
                    setErrors(res.data.error.errors)
                } else {
                    console.log("Bug report created successfully")
                    navigate(`/bugreports/${res.data._id}`);
                }
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <h2>Report a New Application Bug</h2>
            <Link to={"/bugreports"}><button className="btn btn-info" style={{marginTop: 20}}>Back to View All Reports</button></Link>
            <form onSubmit={formHandler}>
                <label htmlFor="name" style={{marginTop: 20}}><strong>Application Name:</strong></label>
                <input type="text" name="name" class="form-control" value={form.name} onChange={onChangeHandler}/>
                { errors.name ? <span style={{color: 'red'}}>{errors.name.message}</span> : "" }
                <br />
                <label htmlFor="bugtitle" style={{marginTop: 20}}><strong>Type of Bug:</strong></label>
                <input type="text" name="bugtitle" class="form-control" value={form.bugtitle} onChange={onChangeHandler}/>
                { errors.bugtitle ? <span style={{color: 'red'}}>{errors.bugtitle.message}</span> : "" }
                <br />
                <label htmlFor="description" style={{marginTop: 20}}><strong>Description of Bug:</strong></label>
                <input type="text" name="description" class="form-control" value={form.description} onChange={onChangeHandler}/>
                { errors.description ? <span style={{color: 'red'}}>{errors.description.message}</span> : "" }
                <br />
                <label htmlFor="resolved"><strong>Has the issue been resolved?</strong></label>
                <select name="resolved" className="form-control" onChange={onChangeHandler} value={form.resolved}>
                    <option value={true}>Yes</option>on
                    <option value={false}>No</option>
                </select>
                <label htmlFor="resdescription" style={{marginTop: 20}}><strong>Description of bug fix:</strong></label>
                <input type="text" name="resdescription" class="form-control" value={form.resdescription} onChange={onChangeHandler}/>
                { errors.resdescription ? <span style={{color: 'red'}}>{errors.resdescription.message}</span> : "" }
                <br />
                <input type="submit" value="Submit" className="btn btn-info" style={{marginTop: 20, marginBottom: 20}} />
            </form>
        </div>
    );
}

export default AddForm;