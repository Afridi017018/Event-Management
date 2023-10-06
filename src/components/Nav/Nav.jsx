import React from 'react';

const Nav = () => {

    const links = <div className='flex flex-col gap-2 lg:flex-row lg:gap-10 font-medium lg:text-lg'>
        <li>Home</li>
        <li>Orders</li>
        <li>Blogs</li>
        <li className='lg:hidden'>Login</li>
        <li className='lg:hidden'>Register</li>
    </div>

    const endLinks = <div className='hidden lg:flex gap-5 font-medium lg:text-lg'>
        <li>Login</li>
        <li>Register</li>
    </div>

    return (
        <div className='bg-base-200'>
            <div className="navbar container mx-auto h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Event Station</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {links}
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        {endLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;