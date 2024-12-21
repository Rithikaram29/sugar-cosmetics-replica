import React, { useState } from "react";
import "./styling/loginSignup.css";
import { localHost } from "../utils/constants.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate()

  const handleSendOtp = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const payload = { phoneNo: mobileNumber };
    try {
      const response = await axios.post(`${localHost}/user/otp`, payload);
      console.log(response)
      //store response.data.currentUser.phoneNo in local storage
      localStorage.setItem("phoneNo", response.data.currentUser.phoneNo);
      alert(response.data.otp);
      setOtpPage(true);
    } catch (error) {
      console.log("Error sending OTP. Please try again.", error);
    }
  };

  const handleverifyOtp = async () => {
    if (!otp || otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }

    const phoneNo = localStorage.getItem("phoneNo");
    
    const payload = {phoneNo: phoneNo, otp: otp};
    try {
      const response = await axios.post(`${localHost}/user/verifyotp`, payload);

      if(response.status === 201){
        localStorage.setItem("authToken", response.data);
        navigate("/")
      }else{
        alert("Error verifying otp")
      }
      
    } catch (error) {
      console.log("Error sending OTP. Please try again.", error);
    }
  };

  return (
    <div className="login-container ">
      {otpPage ? (
        <>
          <div className="login-form ">
            <h1 className="text-2xl font-bold mb-6">Hi!</h1>
            <p className="text-gray-950 mb-4">Login/Sign Up Using Phone</p>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full p-3 border rounded mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div>
              <p>Didn't get otp?</p>{" "}
              <button style={{ color: "pink", background: "none" }}>
                Resend now
              </button>
            </div>
            <button
              className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
              onClick={handleverifyOtp}
            >
              Validate this
            </button>
            <div className="mt-4 text-sm text-gray-500">
              <input type="checkbox" id="updates" className="mr-2" />
              <label htmlFor="updates">
                Get important updates on WhatsApp{" "}
                <a href="/" className="pink-text">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              By signing up or logging in, you agree to our{" "}
              <a href="/" className="text-blue-500">
                Terms and Conditions
              </a>
            </p>
          </div>
        </>
      ) : (
        <div className="login-form ">
          <h1 className="text-2xl font-bold mb-6">Hi!</h1>
          <p className="text-gray-950 mb-4">Login/Sign Up Using Phone</p>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full p-3 border rounded mb-4"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
            onClick={handleSendOtp}
          >
            Send Me OTP
          </button>
          <div className="mt-4 text-sm text-gray-500">
            <input type="checkbox" id="updates" className="mr-2" />
            <label htmlFor="updates">
              Get important updates on WhatsApp{" "}
              <a href="/" className="pink-text">
                Terms and Conditions
              </a>
            </label>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            By signing up or logging in, you agree to our{" "}
            <a href="/" className="text-blue-500">
              Terms and Conditions
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
