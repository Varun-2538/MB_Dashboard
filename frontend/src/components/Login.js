import React from 'react';

const Login = () => (
  <div>
    <h2>Login</h2>
    {/* Link to the Google Auth route in the backend */}
    <a href="http://localhost:5000/auth/google">
      <button>Login with Google</button>
    </a>
  </div>
);

export default Login;
