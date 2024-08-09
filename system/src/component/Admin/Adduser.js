import React, { useState } from 'react';
import Nav from '../Navigation/Nav';


const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Process form data here
    //     console.log(formData);
    // };

    return (
      <><Nav/>
        <form className="user-form">
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </label>
            <label>
                Phone No:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default UserForm;
