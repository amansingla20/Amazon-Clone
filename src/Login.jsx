import React, { useState } from 'react'
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn =(e)=>{
            e.preventDefault();
            let found= false;
            let user_received = localStorage.getItem('Users');
            if(user_received ===null){
                user_received = [];
            }
            else {
                user_received = JSON.parse(user_received);
             }
             for(let user of user_received){
                console.log(user);
                if(user.email === email && user.password === password){
                    history.push('/dashboard');
                    found=true;
                    break;    
                }
            }
            if(found === false) alert('Account is not registered...');
    }
    const registerIn = (e) =>{
        e.preventDefault();
        let found = false;
        let user_received = localStorage.getItem('Users');
        if(user_received ===null){
            user_received = [];
        }
        else {
            user_received = JSON.parse(user_received);
         }
        for(let user of user_received){
            console.log(user);
            if(user.email === email){
                alert('This account is already registered. Please Sign In');
                found=true;
                break;    
            }
        }
        if(found === true) return;
            user_received.push({'email' : email, 'password': password});
            localStorage.setItem('Users', JSON.stringify(user_received));
            localStorage.setItem('User', email);
            history.push('/dashboard');
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login-logo'
                    src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt=''
                />
            </Link>
            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail / Username</h5>
                    <input type='text'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required
                    />
                    <h5>Password</h5>
                    <input type='password'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required
                    />
                    <button
                    onClick={signIn}
                    className='login-sigin-button'>Sign In</button>
                </form>
                <p> By Signing-in you are agree to all the terms and conditions... 
                </p>
                <button onClick = {registerIn} className='login-register-button'>Create your Amazon Account Here.. 
                </button>
            </div>
        </div>
    )
}

export default Login
