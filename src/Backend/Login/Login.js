import React from "react"
const Login  = () => {
    return(
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Enter Your Email" ></input>
            <input type="password" placeholder="Enter Your Password"></input>
            <div className="Button">Login</div>
            <div>or</div>
            <div>Register</div>
        </div>
    )
}
export default Login