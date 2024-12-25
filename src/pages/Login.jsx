import React, { useState } from 'react';
import '../App.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
   const [cred, setcred] = useState({ email: "", password: "" })
       const onchange = (e) => {
           setcred({ ...cred, [e.target.email]: e.target.value })
       }
       const handlesubmit = async (e) => {
           e.preventDefault();
           const response = await fetch("https://express-backend-ngby.onrender.com/api/auth/login", {
               method: "POST", 
               headers: {
                   'Content-Type': 'application/json'
               },
               body:
                   JSON.stringify({email:cred.email, password:cred.password})
               
           });
           const json = await response.json();
           console.log(json);
           if(json.success){
            alert("Successfully logged in")
           }else{
            alert("try again")
           }
       }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <form onSubmit={handlesubmit}>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
        <h2>Login</h2>
        <input type="name" placeholder="Name" />
        <input type="email" placeholder="Email"  value={cred.email} onChange={onchange}  />
        <input type="password" placeholder="Password"  value={cred.password} onChange={onchange} />
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;
