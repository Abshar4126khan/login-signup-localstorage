import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className=' bg-black h-20 flex justify-start p-5'>
                <ul>
                    <li className='text-white ml-20 flex gap-4'>
                        <a className='text-[22px]'>Explore!</a>
                        <a className='mt-1'>Signup</a>
                        <a className='mt-1'>Loginup</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
<nav>
    <ul>
        <li>
            <a>Explore</a>
            <a>Signup</a>
            <a>Loginup</a>
        </li>
    </ul>
</nav>