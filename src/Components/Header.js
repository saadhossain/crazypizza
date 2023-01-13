import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/crazypizza-transparent.png'
import {FaUserAstronaut} from 'react-icons/fa'

const Header = () => {
    return (
        <div className='bg-gray-50 border border-b border-gray-100'>
            <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                <Link to='/'><img src={logo} alt="Crazy Pizza" className='w-48'/></Link>
                <div>
                    <ul className='flex items-center gap-3 font-semibold'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Menu</Link></li>
                        <li><Link to='/'>Features</Link></li>
                        <li><Link to='/'>Shop</Link></li>
                        <li><Link to='/login'><FaUserAstronaut className='text-2nd'/></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;