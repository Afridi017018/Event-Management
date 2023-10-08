import React, { useState } from 'react';
import "./ContactUs.css"

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleContact = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
        });
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <div className='my-16'>
            <div className="hero bg-custom-img">
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className='text-center py-10'>
                        <h2 className='text-4xl font-bold text-white m-5'>Contact Us</h2>
                        <p className='text-white'>We're Here To Help And Answer Any Question You Might Have.We Look Forward To Hearing From You 😊</p>
                        <form onSubmit={handleContact} className='text-center my-5 text-black'>
                            <div>
                               
                                <input className='w-2/3 my-2 px-3 py-1 h-10 rounded-lg' placeholder='Enter Your Name' type="text" value={formData.name} onChange={handleChange} name="name" id="" required />
                            </div>

                            <div>
                         
                                <input className='w-2/3 my-2 px-3 py-1 h-10 rounded-lg' placeholder='Enter Your Email' type="email" value={formData.email} onChange={handleChange} name="email" id="" required />
                            </div>
                            <div>
                         
                                <input className='w-2/3 my-2 px-3 py-1 h-10 rounded-lg' placeholder='Enter Your Number' type="text" value={formData.phone} onChange={handleChange} name="phone" id="" />
                            </div>
                            <div>
                                <textarea className='w-2/3 my-2 px-3 py-1 h-24 rounded-lg' placeholder='Enter Message' type="text" value={formData.message} required onChange={handleChange} name="message" id="" />
                            </div>

                            <div>
                                <button type='submit' className='bg-blue-500 hover:bg-blue-800 px-3 py-1 text-white font-medium rounded w-28 text-lg'>Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ContactUs;