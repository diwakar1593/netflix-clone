import React from 'react'
import "./css/Login.css"
function SignUpScreen() {
  return (
    <div className="signUpScreen">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Sign In</button>

          <h4>New to Netflix <span>Sign Up Now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen