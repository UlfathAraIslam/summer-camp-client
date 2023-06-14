import React from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Registration = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-success">Register Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} name='name' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("photoURL")} name='name' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{ required: true })} name='email' className="input input-bordered" />
                            {errors.email && <span className='text-orange-400'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* TODO: handling password error */}
                            <input type="password" 
                            {...register("password", {required: true,
                            minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[@#$%^&+=])/
                             })} className="input input-bordered" />

                            {errors.password?.type === 'required' && <p className='text-orange-400'>Password is required</p>}

                            {errors.password?.type === 'minLength' && <p className='text-orange-400'>Password must be 6 charecters</p>}

                            {errors.password?.type === 'pattern' && <p className='text-orange-400'>Password must have a capital letter and a special charecter</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("password")} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value='Registration' />
                        </div>
                        <p><small>Have an account? <Link to='/login' className='text-success'>Login Here...</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;