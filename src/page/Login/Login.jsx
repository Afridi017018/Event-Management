import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../components/providers/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {signIn, signInGoogle, user} = useContext(AuthContext);

    const handleLogin = async (e)=>{
        e.preventDefault();
 
        const newForm = new FormData(e.currentTarget);

         const email = newForm.get('email');
         const password = newForm.get('password');
        //  console.log(email, password);
        const login = await signIn(email,password);
        // console.log(login.user)
        
     }

     const handleGoogleLogin =async (e)=>{
        e.preventDefault();
        

        const login = await signInGoogle();
        // console.log(login.user)

     }

    //  console.log(user)

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-16">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <img data-aos="fade-left" className='h-96 w-96 lg:w-[500px]' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=360&t=st=1696691824~exp=1696692424~hmac=a1cecb1b1939fd03e1d2991ba9b0eb40f896930424db3394a7c10ed3c246e807" alt="" />
                    </div>
                    <div data-aos="fade-right" className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl">
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