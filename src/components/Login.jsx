import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';




const Login = () => {
    const {logInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page',  location)
   
const handlelogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')

    logInUser(email, password)
    .then(result => {
        
        console.log(result.user)
        // navigate after login
    navigate(location?.state ? location.state : '/')

    })
    .catch(error=>{
        console.log(error)
    })
}

    return (
        <div>
            <Navbar />
            <h2>This is login </h2>
            <form onSubmit={handlelogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name='email'
                    className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name='password'
                    className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className='text-center mt-4'>Don't have an accounts <Link
            className='text-blue-600 font-bold'
            to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;