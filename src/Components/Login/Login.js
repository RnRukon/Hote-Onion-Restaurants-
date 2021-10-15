import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../FireBase/Firebase.init';
import useAuth from '../Hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const signInEmailPassword = (e) => {
        e.preventDefault();
        console.log(email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {

            });
    }


    return (
        <div className='mt-36 text-center'>
            <form >
                <input required onBlur={emailChange} className="input border p-2 inputFiled" type="email" name="email" placeholder="Email" /><br /><br />
                <input required onBlur={passwordChange} className="input border p-2 inputFiled" type="password" name="password" placeholder="Password" /><br /><br />
                <button onClick={signInEmailPassword} className="btn btn-warning Btn">Login</button>
            </form>
            <p>---------or---------</p>
            <button className='btn  btn-primary Btn' onClick={signInUsingGoogle}>Google sign in</button><br /><br />
            <p>New User? <Link to='/register'>please Register</Link></p>

        </div>
    );
};

export default Login;