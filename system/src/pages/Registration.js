import React, { useState } from 'react';
// Assuming you have a separate CSS file for styling

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
   

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('username:',username);
        console.log('Address:', address);
        console.log('Phone:', phone);
        console.log('Email:', email);
        console.log('password:', password);
        
    };

    return (
        <div className="container">
            <h1 style={{ color: '#095a02' }}>Registration Form</h1>
            <form id="registration-form" onSubmit={handleSubmit}>
                <label htmlFor="name-input"> full Name:</label>
                <input
                    type="text"
                    id="name-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

                <label htmlFor="phone-input">Phone no:</label>
                <input
                    type="tel"
                    id="phone-input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                /><br />

                <label htmlFor="email-input">Email:</label>
                <textarea
                    id="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />
                 <label htmlFor='usename-input'>username</label>
                <input
                    type='text'
                    id='usename'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                    />
                    <br/>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='text'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <br/>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
