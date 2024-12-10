import React, { useState } from "react";
import "./styling/loginSignup.css";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSendOtp = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    try {
      const response = await fetch("Adddddddd otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      });
      const data = await response.json();
      if (data.success) {
        alert("OTP sent successfully!");
      } else {
        alert("Failed to send OTP.");
      }
    } catch (error) {
      alert("Error sending OTP. Please try again.");
    }
  };

  return (
    <div className="login-container ">
      <div className="login-form ">
        <h1 className="text-2xl font-bold mb-6">Hi!</h1>
        <p className="text-gray-950 mb-4">
          Login/Sign Up Using Phone
        </p>
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
    </div>
  );
};

export default Login;
