import React, { useState } from 'react';
import Nav from '../Navigation/Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OfficerResponse = () => {
    const { event_id } = useParams();
    const officerId = parseInt(localStorage.getItem('userId'))

    const [responseDetails, setResponseDetails] = useState({
        id: 0,
        responseMessage: '',
        response_Time: '',
        officer: {
            userId: officerId
        },
        event: {
            event_id: event_id
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setResponseDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/response/add', responseDetails)
            .then(response => {
                console.log('Response sent:', response.data);
                alert('Response has been sent to the user.');
            })
            .catch(error => {
                console.error('Error sending response:', error);
                alert('Failed to send response.');
            });
    };
    return (
        <><Nav />
        <div className="officer-response" style={{marginLeft:"16%", marginTop:"105px"}}>
            <h1>Send Response to User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Response Message:
                    <textarea
                        name="responseMessage"
                        value={responseDetails.responseMessage}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit">Send Response</button>
            </form>
        </div>
        </>
    );
};

export default OfficerResponse;