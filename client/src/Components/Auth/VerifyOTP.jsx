import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const VerifyOTP = () => {
    const cookies = new Cookies();
    const location = useLocation();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [otpCode, setOtpCode] = useState("");
    const [inputData, setInputData] = useState(null);


    useEffect(()=>{
    if(location.state){
            setInputData(location.state);
            // console.log(location.state)
            // console.log("inputData",inputData)
        }
        else{
            navigate("/", {replace: true});
        }
    },[location])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (otpCode.length < 6) {
            toast.error("Please enter the otp");
            return;
        }

        try {
            //send inputData with otp to signup api route
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/signup`,
                {
                    ...inputData,
                    otp: otpCode
                }
            );

            console.log(res);

            const { success, message, token } = res.data;
            if (success) {
                console.log(message)
                login(token);
                cookies.set("TOKEN", token, {
                    path: "/",
                });
                navigate("/Home");
            } else {
                console.log(message);
                toast.error("Invalid OTP")
            }
        }
        catch (err) {
            toast.error("Invalid OTP")
            console.log(err)
        }

    }

    return (
        <div className="flex flex-col items-center flex-wrap justify-center h-70-vh bg-gray-900">
            <h1 className="text-white text-2xl mb-2">Please enter the One-Time Password</h1>
            <h2 className="text-white mb-4">A One-Time Password has been sent to {inputData?.email} </h2>
            <input 
                type="number" 
                id="otp-code" 
                onChange={e => setOtpCode(e.target.value.slice(-6))} 
                value={otpCode}
                className="my-6 outline-none hover:appearance-none text-center p-1 text-xl"
            />
            <button onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2">
                Submit
            </button>
        </div>
    )
}

export default VerifyOTP;