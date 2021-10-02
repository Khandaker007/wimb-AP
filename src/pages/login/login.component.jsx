import React from "react";

// COMPONENT
import FormInput from "../../components/form-input/form-input.component";

// ICON
import logo from '../../assets/logo/wimb-logo.svg'

import './login.style.scss'
import '../../sass/typography.scss'

const Login = () => (
    <div className="login">
        <div className="login__body">
            <div className="login__body--header">
                <img src={logo} alt="logo icon" className='logo'/>
                <h3 className='heading-3 uppercase'>sign in to your account</h3>
            </div>
            <div className="login__body--form">
                <FormInput type='email' placeholder='Email Address' id='email' label='Email Address' required/>
                <FormInput type='password' placeholder='Password' id='password' label='Password' required/>
                <button className='submit-btn'>Login</button>
            </div>
        </div>
    </div>
)

export default Login;