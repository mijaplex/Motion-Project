import React from 'react';
import { useState } from 'react';
import {SignInContainer, SignInButton} from './LoginFormStyle'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { userLogin } from '../../../Store/Actions/loginAction';
import { useHistory } from 'react-router';


function LoginForm() {
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(userInput)
        // console.log(passwordInput)
        userLogin(userInput, passwordInput);
        history.push('/')

    }

    return (
        <SignInContainer >
            <h3>Sign In</h3>
            <input type='text' placeholder='Username' onChange={(e) => setUserInput(e.target.value)} value={userInput} ></input>
            <input type="password" placeholder='Password' onChange={(e) => setPasswordInput(e.target.value)} value={passwordInput} ></input>
            <img src="../../" alt="" />

            <SignInButton className='buttonSignIn' onClick={submitHandler} >Sign In</SignInButton>
        </SignInContainer>
    );
}

export default LoginForm;