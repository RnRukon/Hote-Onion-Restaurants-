import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, deleteUser } from "firebase/auth";
import initializeAuthentication from '../../FireBase/Firebase.init';

initializeAuthentication();

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { signInUsingGoogle } = useAuth();



    const emailChange = (event) => setEmail(event.target.value);
    const passwordChange = (event) => setPassword(event.target.value);
    const nameChange = (event) => setName(event.target.value);


    const registerUser = (e) => {
        e.preventDefault()
        const auth = getAuth();
        console.log(email, password, name)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setUserName();
            })
            .catch((error) => {

            });

    }
    const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }
    const deleteAccount = () => {
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        });
    }

    return (
        <div className=' mt-20 text-center register-bg'>
            <form >
                <h1 className=' pb-5 text-red-600'>Register Form </h1>
                <input onBlur={nameChange} className="border p-2 inputFiled" type="name" placeholder='Full Name' /><br /><br />
                <input onBlur={emailChange} className="border p-2 inputFiled" type="email" placeholder='Email' /><br /><br />
                <input onBlur={passwordChange} className="border p-2 inputFiled" type="Password" placeholder='New Password' /><br /><br />
                <button onClick={registerUser} className="btn  btn-warning inputFiled">Register</button>
            </form>
            <br /><br />
            <div>
                <button onClick={deleteAccount} className='btn btn-danger Btn {
'>Delete your Account</button>
            </div>
            <p>---------or---------</p>
            <button className='btn btn-primary Btn ' onClick={signInUsingGoogle}>Google sign in</button>
            <div className='mt-3'>
                <p>Already have an Account? <Link to='/login'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;