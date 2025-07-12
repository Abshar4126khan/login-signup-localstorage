import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }
    return (
        <div>
            <Navbar />
            <div className='flex justify-around mt-3'>
                <h2 className='text-xl font-semibold'>Welcome Home Page 1</h2>
                <button onClick={logout} className="ml-26 mt-5 bg-blue-600 px-6 hover:bg-blue-700 py-0.5 text-sm font-semibold text-white cursor-pointer">Logout</button>
            </div>
        </div>
    );
}

export default Home;
