import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading';
import UseToken from '../../Shared/Hooks/UseToken';


const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();



    let from = location.state?.from?.pathname || "/dashboard";


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    // get the token from useToken hook
    const [token] = UseToken(gUser || user);

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });


    };

    useEffect(() => {
        if (token) {
            navigate('/dashboard');


        }
    }, [token, from, navigate])

    let logError;
    if (gError || error) {
        logError = <p className='text-red-700'>{gError?.message || error?.message}</p>
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl px-4 py-4">
                <div className="card-body">
                    <h2 className="card-title mx-auto">Signup</h2>
                    <p className='text-red-500 font-bold'>{logError}</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* daisy ui form */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="your email"
                                className="input input-bordered w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "errror message"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.email.message}</span>}
                            </label>
                            {/* -------name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })}
                                />


                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.name.message}</span>}

                                </label>
                            </div>
                            {/* password */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="your password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: '6 character password' // JS only: <p>error message</p> TS only support string
                                        }
                                    })}
                                />


                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-semibold">{errors.password.message}</span>}

                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-semibold">{errors.password.message}</span>}

                                </label>
                            </div>
                            <input type="submit" className='btn w-full text-white max-w-xs' value='Signup' />
                        </div>
                    </form>
                    <small>Already have an account? <Link to='/login' className='text-secondary font-semibold '>Login</Link></small>
                </div>
                <div className="divider">OR</div>
                <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Signup;