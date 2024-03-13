import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {

    const {user, createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const photo = form.get('photo');
        const password = form.get('password')
        console.log(email, password, name, photo);

        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {console.error(error)})

    }
    return (
        <div>
           
            <Navbar />
            <h1>Please Register</h1>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="Name" placeholder="Name" name='name'
                    className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="photo" placeholder="Photo URL" name='photo'
                    className="input input-bordered" required />
                </div>

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
                        
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className='text-center mt-4'>Already have an account ? <Link
            className='text-blue-600 font-bold'
            to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;