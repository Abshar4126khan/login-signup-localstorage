import { useState } from "react"
import Img from "../Image/main.jpg"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
export const Signup = () => {

    const loogin = () => {
        navigate("/login")
    }

    const userDetail = {
        name: "",
        email: "",
        password: ""
    }

    const [data, setData] = useState(userDetail);

    const navigate = useNavigate();

    const handleInput = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        const value = e.target.value;
        const name = e.target.name;

        setData({ ...data, [name]: value })
        console.log(data);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (data.name == "" || data.email == "" || data.password == "") {
            alert("Please Enter Detail")
        }
        else {
            const getData = JSON.parse(localStorage.getItem("user") || "[]")
            let arr = [];
            arr = [...getData]
            arr.push(data)

            localStorage.setItem("user", JSON.stringify(arr))
            alert("Signup Successfully! ")
            navigate("/login")
        }


    }


    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap justify-center items-center gap-[53px] mt-[29px]">
                <form onSubmit={handleSubmit}>
                    <div className="text-center text-xl font-semibold">
                        <p>Sign Up</p>
                    </div>
                    <div className="flex flex-col mt-5 space-y-4">
                        <input className="border border-gray-500 p-[3px] text-sm w-80 outline-none" type="text" name="name" placeholder="Enter your Name" onChange={handleInput} />
                        <input className="border border-gray-500 p-[3px] text-sm w-80 outline-none" type="email" name="email" placeholder="Enter your Email" onChange={handleInput} />
                        <input className="border border-gray-500 p-[3px] text-sm w-80 outline-none" type="password" name="password" placeholder="Enter your Password" onChange={handleInput} />
                    </div>
                    <p className="text-[13px] text-gray-700 mt-1">Already have an account ? <a onClick={loogin} className="text-blue-500 underline" href="#">Login</a></p>
                    <button className="ml-26 mt-5 bg-green-600 px-6 py-0.5 text-sm font-semibold text-white cursor-pointer">
                        SignUp
                    </button>
                </form>
                <div className="w-[500px]">
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}