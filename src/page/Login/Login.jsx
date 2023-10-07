import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../components/providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {signIn, signInGoogle} = useContext(AuthContext);

    const handleLogin = async (e)=>{
        e.preventDefault();
 
        const newForm = new FormData(e.currentTarget);

         const email = newForm.get('email');
         const password = newForm.get('password');
        //  console.log(email, password);
        const login = await signIn(email,password);
        console.log(login.user)
     }

     const handleGoogleLogin =async (e)=>{
        e.preventDefault();
        

        const login = await signInGoogle();
        console.log(login.user)

     }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div onClick={handleGoogleLogin} className="mt-6 btn btn-primary flex gap-5 justify-center">
                                  <div className='text-xl'><FcGoogle /></div>
                                <div>Sign In With Google</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;