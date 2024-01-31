import React, { useState } from 'react';
import '../App.css';
import './css/Login.css';

import { database } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { FaUserLarge } from "react-icons/fa6";

export default function Login() {
    const [login, setLogin] = useState(false)

    const history = useNavigate()

    const handleSubmit =(e,type)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
    if(type == 'signup'){
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            history('/home')
    }).catch(err=>{
        alert(err.code)
        setLogin(true)
    })
    }else{
        signInWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            history('/home')
    }).catch(err=>{
        alert(err.code)
    })
}
}

  return (
    <div className='container'>
        <div className='form-box btn-field'>
            <div class="avatar">
                <FaUserLarge />
            </div>
            <h1>{login?'SignIn':'SignUp'}</h1>
            <div className='flex gap-4'>
            <button className={login == false ?'activeColor':'pointer'} onClick={()=>setLogin(false)}>Sign Up</button>
            <button className={login == true ?'activeColor':'pointer'} onClick={()=>setLogin(true)}>Sign In</button>
            </div>
            <div className='text-white m-7'>
                <form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
                    <input name='email' placeholder='Email' /><br/>
                    <input name='password' type='password' placeholder='Password' />
                    <button className='m-6 px-14 py-2 border-2 border-blue-500'>{login?'Sign In':'Sign Up'}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
