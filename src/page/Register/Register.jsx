import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../components/providers/AuthProvider';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext)

    const handleRegister = async (e)=>{
       e.preventDefault();

       const newForm = new FormData(e.currentTarget);
       const name = newForm.get('name');
        const photo = newForm.get('photo');
        const email = newForm.get('email');
        const password = newForm.get('password');
        // console.log(name, photo, email, password);

        const now =await createUser(email,password,name,photo)
        await updateUser(name,photo);

        console.log(now.user);
   
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='h-96 w-[500px]' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-232.jpg?w=360&t=st=1696693904~exp=1696694504~hmac=40972f5d168fba7be17675f3c6ee18a3d39b16876adec476bcf222c7418e1982" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;