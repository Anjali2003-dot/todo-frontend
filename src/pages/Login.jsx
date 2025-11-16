import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT CLICKED");

        try {
            const res = await fetch("https://todo-backend-4xu0.onrender.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password}),
            });

            const data = await res.json();
            console.log("Login response:", data);

            if(res.ok && data.token) {
                localStorage.setItem("token", data.token);
                window.location.href = "/notes";  // redirect to notes page
            } else {
                setMessage(data.error || "Login failed");
            }
            
        } catch (err) {
            console.error(err);
            setMessage("Erros logging in");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>  



            </form>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}