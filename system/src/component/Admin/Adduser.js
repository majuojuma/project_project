// import React, { useState } from 'react';
// import axios from 'axios';
// import Nav from '../Navigation/Nav';

// const UserForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         location: '',
//         phone: '',
//         email: '',
//         username: '',
//         role: '',
//         password: ''
//     });

//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:8080/api/v1/user/add', formData)
//             .then(response => {
//                 setMessage('User added successfully');
//                 // Clear form or handle further actions
//                 setFormData({
//                     name: '',
//                     location: '',
//                     phone: '',
//                     email: '',
//                     username: '',
//                     role: '',
//                     status:'',
//                     password: ''
//                 });
//             })
//             .catch(error => {
//                 setMessage('Error adding user: ' + error.response.data);
//             });
//     };

//     return (
//         <>
//             <Nav />
//             <form className="user-form" onSubmit={handleSubmit} style={{ marginTop: "120px" }}>
//                 <h1 style={{ textAlign: "center" }}>ADD USER FORM IN THE SYSTEM</h1>
//                 <label>
//                     Name:
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Location:
//                     <input type="text" name="location" value={formData.location} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Phone No:
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Username:
//                     <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     User Role:
//                     <input type="text" name="role" value={formData.role} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Status:
//                     <input type="text" name="status" value={formData.status} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 </label>
//                 <button type="submit">Submit</button>
//                 {message && <p>{message}</p>}
//             </form>
//         </>
//     );
// };

// export default UserForm;
import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../Navigation/Nav';

const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        address: '',
        phone_no: '',
        email: '',
        role: '',
        status: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/v1/user/add', formData)
            .then(response => {
                setMessage('User added successfully');
                // Clear form or handle further actions
                setFormData({
                    username: '',
                    address: '',
                    phone_no: '',
                    email: '',
                    role: '',
                    status: '',
                    password: ''
                });
            })
            .catch(error => {
                setMessage('Error adding user: ' + error.response.data);
            });
    };

    return (
        <>
            <Nav />
            <form className="user-form" onSubmit={handleSubmit} style={{ marginTop: "120px" }}>
                <h1 style={{ textAlign: "center" }}>ADD USER FORM IN THE SYSTEM</h1>
                <label>
                    Name:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </label>
                <label>
                    Location:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <label>
                    Phone No:
                    <input type="tel" name="phone_no" value={formData.phone_no} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    User Role:
                    <input type="text" name="role" value={formData.role} onChange={handleChange} required />
                </label>
                <label>
                    Status:
                    <input type="text" name="status" value={formData.status} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
                {message && <p>{message}</p>}
            </form>
        </>
    );
};

export default UserForm;

