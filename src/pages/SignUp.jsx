import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [cred, setcred] = useState({ name:"",  email: "", password: "" });
    const {name, email, password}=cred
    const onchange = (e) => {
        setcred({ ...cred, [e.target.email]: e.target.value })
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify({name,email, password})
            
        });
        const json = await response.json();
        console.log(json)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
            <form onSubmit={handlesubmit}>
                <nav>
                    <Link to="/">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                </nav>
                <h2>Sign Up</h2>        <input type="name" placeholder="Name" />

                <input type="email" placeholder="Email" value={cred.email} onChange={onchange} />
                <input type="password" placeholder="Password" value={cred.password} onChange={onchange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
