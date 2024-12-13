import dotenv from "dotenv";
dotenv.config();
import secretkey from "./secretKey.js";


if (!secretkey) {
    throw new Error("SecretKey not set!");
}

import jwt from "jsonwebtoken";

//generate token
const generateToken = (user) => {
    const payload = {
        _id: user._id,
       phone: user.phoneNo
    };

    return jwt.sign(payload, secretkey, { expiresIn: "3h" });
};

export { generateToken };
