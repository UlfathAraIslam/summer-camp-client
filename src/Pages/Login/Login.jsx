import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form =  event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User login successful',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, { replace: true });
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-success">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input  className="btn btn-success" type="submit" value='Login'  />
                        </div>
                        <p><small>New Here? <Link to='/registration' className='text-success'>Create an Account</Link></small></p>
                        <SocialLogin/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;