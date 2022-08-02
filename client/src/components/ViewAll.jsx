import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ViewAll = props => {
    const [bugreport, setBugReport] = useState(null);
    const [update, setUpdate] = useState(false);
    var date, month;

    useEffect(() => {
        axios.get("http://localhost:8000/api/bugreports")
            .then(res => setBugReport(res.data))
            .catch(err => console.log(err))
    }, [update])

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/bugreports/delete/" + id)
            .then(() => setUpdate(!update))
            .catch(err => console.log("Issue Deleting Record", err))
    }

    return(
        <div className="container">
            <h1>All Reported Bugs</h1>
            <Link to={`/bugreports/new`}><button className="btn btn-info" style={{marginTop: 20, marginBottom: 20}}>Report Application Bug</button></Link>
            <Table striped bordered variant="dark">
                <thead>
                    <th>Application Name</th>
                    <th>Type of Bug</th>
                    <th>Actions Available</th>
                </thead>
                <tbody>
                {
                    bugreport ? bugreport.map((bugreportName, i) => {
                        const date = bugreportName.createdAt;
                        return <tr key={i}>
                            <td>{bugreportName.name}</td>
                            <td>{bugreportName.bugtitle}</td>
                            <td><Link to={`/bugreports/${bugreportName._id}`}><button className="btn btn-info" style={{marginRight: 20}}>View Bug Report</button></Link><button className="btn btn-info" onClick={() => handleDelete(bugreportName._id)}>Delete Bug Report</button></td>
                        </tr>
                    }) : ""
                } 
                </tbody>
            </Table>
        </div>
    );
}

export default ViewAll;