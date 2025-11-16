import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login clicked");
    };

    return(
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleLogin}>
                <h2 style={styles.title}>Login</h2>

                <input
                  type="email"
                  placeholder="Enter email"
                  style={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  style={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> 

                <button style={styles.button} type="submit">Login</button>

                <p style={{ marginTop: "10px "}}>
                    Not registered? <Link to="/register">Create Account</Link>
                    
                </p>   
            </form>
        </div>
    );
}


const styles = {
    container: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f1f1f1",
    },
    form: {
        width: "350px",
        padding: "25px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    input: {
        marginBottom: "15px",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "6px",
        border: "1px solid gray",
    },
    button: {
        padding: "12px",
        background: "black",
        color: "white",
        fontSize: "16px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",

    },
};

export default Login;