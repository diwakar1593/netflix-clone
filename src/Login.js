import React from 'react'
import "./css/Login.css"
function Login() {
  return (
    <div className="login">
        <div className="login__header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt='logo'/>

            <button className="login__button">
                Sign In
            </button>
        </div>

        <div className="login__body">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <form className="login__form">
                <input type="text" placeholder="Email Address"/>
                <button>Get Started</button>
            </form>
        </div>

    </div>
  )
}

export default Login