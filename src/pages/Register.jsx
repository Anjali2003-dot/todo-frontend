import React , { useState } from "react";
import { Link } from "react-router-dom";

export default function Register(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://todo-backend-4xu0.onrender.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({name: username, email, password}),
            });

            const data = await res.json();
            if (res.ok) {
                setMessage(data.message);
            } else {
                setMessage(data.error)
            }
        } catch (err) {
            console.error(err);
            setMessage("Error registering user");
        }

    };

    return (
        <div className="form-container glass-card">
            <h2>Register</h2>
            {message && <p className="error-text">{message}</p>}
            <form onSubmit={handleSubmit}>
                <label className="input-label">Username</label>
                <input
                  className="input-field"
                  type="text"
                  name="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label className="input-label">Email</label>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  
                  required
                />
                <label className="input-label">Password</label>
                <input
                  className="input-field"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className="btn-primary" type="submit">Register</button>    
            </form>
            <p style={{ marginTop: "12px", textAlign: "center" }}>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );

}