import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  
 const handleSubmit =async (event) =>{
  event.preventDefault();
  try{
    const response = await axios.get(`http://localhost:8080/api/v1/user/login/${email}`)
    const userData = await response.data
    console.log(userData.email);

    if(userData.email === email  && userData.password === password){

      localStorage.setItem("role", userData.role)

      localStorage.setItem("userId", userData.userId)

      if(userData.role === "Admin"){
        alert("it is admin")
      }

      if(userData.role === "Person"){
        navigate('/nav');
        alert("it is person")
      }

      if (userData.role == "Sheha"){
        alert("it's sheha")
      }

      if(userData.role === "Officer"){
        alert("it's officer")
      }
      alert("success")
    }else{
      alert("fail")
    }
    
  }catch(error){
    console.error(error)
  }
 }

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

      
    

    return (
        <div className="login-form">
            <h2 style={{ color: '#1b5374' }}>ONLINE REPORTING EVENTS SYSTEM</h2>
             <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="please enter your email"
                                    
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    
                /><br /><br />
                <input
                     type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                /><br />
                <button type="submit">Login</button>
             </form> 
             {error && <div className="error-message">{error}</div>}
             

        </div>
    ); 
};

export default LoginForm;
