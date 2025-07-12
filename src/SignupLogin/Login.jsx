import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();


    const handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if ("email" == name) {
            setEmail(value)
        }
        if ("password" == name) {
            setPassword(value)
        }
    }

    const signup = () => {
        navigate("/")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email == "" || password == "") {

            alert("Please Enter Details")
        } else {
            let getDetails = JSON.parse(localStorage.getItem("user"));
            console.log(getDetails);
            getDetails.map((currval) => {
                console.log(currval.email);
                let storeEmail = currval.email;
                let storePassword = currval.password;

                if (storeEmail == email && storePassword == password) {
                    alert("Login Successfully")
                    navigate("/home")
                }
                else {
                    return setMsg("Invalid Email or Password")
                }
            })
        }


    }
    return (
        <div>
            <Navbar />
            <p className='text-center text-[25px] bg-[rgb(6,162,214)] w-[300px] m-auto text-white'>{msg}</p>
            <div className="flex flex-wrap justify-center items-center gap-[53px] mt-[29px]">
                <form onSubmit={handleSubmit}>
                    <div className="text-center text-xl font-semibold">
                        <p>Log In</p>
                    </div>
                    <div className="flex flex-col mt-5 space-y-4">

                        <input className="border border-gray-500 p-[3px] text-sm w-80 outline-none" type="text" name="email" placeholder="Enter your Email" onChange={handleInput} />
                        <input className="border border-gray-500 p-[3px] text-sm w-80 outline-none" type="password" name="password" placeholder="Enter your Password" onChange={handleInput} />
                    </div>
                    <p className="text-[13px] text-gray-700 mt-1">If you create have account ? <a onClick={signup} className="text-blue-500 underline" href="#">Signup</a></p>
                    <button className="ml-26 mt-5 bg-green-600 px-6 py-0.5 text-sm font-semibold text-white cursor-pointer">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
