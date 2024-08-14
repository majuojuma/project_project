import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [phone_no, setPhone_no] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const role = 'Person';
    const status ='Active';

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const personData = {
            name,
            username,
            address,
            phone_no,
            email,
            password,
            role,
            status
        };

        try {
            const response = await fetch('http://localhost:8080/api/v1/person/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(personData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Person added successfully:', result);
                alert(' Person registed successfully')

                // Optionally reset the form
                setName('');
                setUsername('');
                setAddress('');
                setPhone_no('');
                setEmail('');
                setPassword('');
            } else {
                console.error('Failed to add person:', response.statusText);
                alert('fature to register please try again')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h1 style={{ color: '#095a02' }}>Registration Form</h1>
            <form id="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="name-input">Full Name:</label>
                <input
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br />

                <label htmlFor="username-input">Username:</label>
                <input
                    type="text"
                    id="username-input"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br />

                <label htmlFor="address-input">Address:</label>
                <input
                    type="text"
                    id="address-input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                /><br />

                <label htmlFor="phone-input">Phone No:</label>
                <input
                    type="tel"
                    id="phone-input"
                    value={phone_no}
                    onChange={(e) => setPhone_no(e.target.value)}
                    required
                /><br />

                <label htmlFor="email-input">Email:</label>
                <input
                    type="email"
                    id="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />

                <label htmlFor="password-input">Password:</label>
                <input
                    type="password"
                    id="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />

                <button type="submit">Register</button>
                <br></br>
                <br></br>
                <Link to={'/'}> <button type="signup">Login</button></Link>
            </form>
        </div>
    );
};

export default RegistrationForm;
