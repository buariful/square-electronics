import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [icon, setIcon] = useState(true);
    const iconChange = () => {
        setIcon(!icon)
    }
    const [user, loading] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    return (
        <nav className='bg-primary'>
            <div className="w-11/12 mx-auto" >
                {icon ? <MenuIcon className='w-10 md:hidden cursor-pointer' onClick={iconChange}></MenuIcon> : <XIcon className='w-10 md:hidden cursor-pointer' onClick={iconChange}></XIcon>}


                <div className={`${icon ? "hidden" : "block"} md:flex justify-between items-center`}>
                    <Link to='/'><img src={logo} alt="logo" className={`${icon ? "m-0" : "mx-auto"} w-24`} /></Link>
                    <div className='md:flex'>
                        <Link to='/home' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Home</Link>
                        <Link to='/Blog' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Blog</Link>

                        {user ? <Link to='/dashboard' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Dashboard</Link> : ''}

                        <Link to='/portfolio' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Portfolio</Link>

                        {user ? <button className='block py-8 text-white ml-3 md:ml-5 font-semibold' onClick={logout}>Sign out</button> : <Link to='/login' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Login</Link>
                        }
                        {user ? <p className='block py-8 text-secondary ml-3 md:ml-5 font-semibold'>{user.displayName}</p> : ''}



                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;