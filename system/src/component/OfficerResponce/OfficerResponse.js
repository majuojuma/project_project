import React, { useState } from 'react';
import Nav from '../Navigation/Nav';

const OfficerResponse = () => {
    const [responseDetails, setResponseDetails] = useState({
        eventId: '',
        officerName: '',
        center: '',
        responseMessage: '',
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
        // Handle form submission and response logic here
        console.log('Response Details:', responseDetails);
        alert('Response has been sent to the user.');
    };

    return (
        <><Nav />
        <div className="officer-response">
            <h1>Send Response to User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Event ID:
                    <input
                        type="text"
                        name="eventId"
                        value={responseDetails.eventId}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Officer Name:
                    <input
                        type="text"
                        name="officerName"
                        value={responseDetails.officerName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Center:
                    <select
                        name="center"
                        value={responseDetails.center}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Center</option>
                        <option value="Police Station">Police Station</option>
                        <option value="Fire Camp">Fire Camp</option>
                        <option value="KMKM">KMKM</option>
                    </select>
                </label>
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
