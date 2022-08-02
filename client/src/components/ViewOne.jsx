import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ViewOne = props => {
    const [oneBugreport, setOneBugreport] = useState(null);
    const { _id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/bugreports/" + _id)
            .then(res => setOneBugreport(res.data[0]))
            .catch(err => console.log(err))
    }, [_id])

    return(
        <div>
            {
                oneBugreport ? <div className="onebugreport">
                    <h1 className="onebugreport">Bug Report Information:</h1>
                    <h1 className="onebugreport">Application Name: {oneBugreport.name}</h1>
                    <h2 className="onebugreport">Type of Bug: {oneBugreport.bugtitle}</h2>
                    <h2 className="onebugreport">Description of Bug: {oneBugreport.description}</h2>
                    {oneBugreport.resolved === true ? <h2 className="onebugreport">Has the issue been resolved? Yes</h2> : <h2 className="onebugreport">Has the issue been resolved? No</h2>}
                    <h2 className="onebugreport">How was the issue resolved? {oneBugreport.resdescription}</h2>
                    <Link to={`/bugreports/update/${oneBugreport._id}`}><button className="btn btn-info" style={{marginTop: 20, marginBottom: 20, marginRight: 20}}>Update this Bug Report</button></Link>
                    <Link to={"/bugreports"}><button className="btn btn-info" style={{marginTop: 20, marginBottom: 20}}>Back to All Bug Reports</button></Link>
                    </div> : ""
            }
        </div>
    );
}

export default ViewOne;