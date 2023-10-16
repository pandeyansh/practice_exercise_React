import React, { useState } from 'react';
const LoginForm = ({ onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
    onLogin({ name, email, password });
    };
    return (
    <div className="login-form">
    <h2>Login</h2>
    <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin}>Login</button>
    </div>
);
};
export default LoginForm;