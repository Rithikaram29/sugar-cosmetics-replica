import axios from "axios";
import React, { useEffect, useState } from "react";
import { localHost } from "../utils/constants.jsx";
import { useNavigate } from "react-router-dom";

const AccountBody = () => {
  const [account, setAccount] = useState({});
  const [openNow, setOpenNow] = useState("login");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${localHost}/user/details`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        const data = res.data;
        const user = { ...data, _id: null };

        setAccount(user);
      } catch (error) {
        console.log("Error fetching user:", error.message);
      }
    };

    fetchUser();
    console.log(account);
  }, []);

  return (
    <>
    <div className="flex">
    <div className="w-96 m-3">
      <div
        className=""
        style={{
          backgroundImage:
            "url(https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png)",
        }}
      >
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
          <div>
            <h3 className="font-bold text-lg">
              {account.userName ? account.userName : "Sugar Fan"}
            </h3>
            {account.phoneNo ? (
              <p className="text-gray-400">{account.phoneNo}</p>
            ) : null}
          </div>
        </div>
      </div>
  
      <div className="bg-slate-50 text-white rounded-lg p-4 shadow-md">
        <div className="mt-4 w-full bg-slate-100 hover:cursor-pointer" onClick={()=>setOpenNow("orders")}>
          <button className="font-medium text-gray-400 mb-2" >Orders</button>
        </div>
  
        <div className="mt-4 w-full bg-slate-100 hover:cursor-pointer" onClick={()=>setOpenNow("address")}>
          <button className="font-medium text-gray-400 mb-2">Addresses</button>
        </div>
  
        <div className="mt-4 w-full bg-slate-100 hover:cursor-pointer" onClick={()=>setOpenNow("wishlist")}>
          <button className="font-medium text-gray-400 mb-2">Wishlist</button>
        </div>
  
        <div className="mt-4 w-full bg-slate-100 hover:cursor-pointer">
          <button className="font-medium text-gray-400 mb-2 ">WhatsApp Store</button>
        </div>
      </div>
    </div>
  
    {/* Login Section */}
    <div>
      {openNow === "login" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "2%",
          }}
        >
          <img src="https://media.sugarcosmetics.com/upload/graphic.png" />
          {account.userName ? (
            <p>Not {account.userName}</p>
          ) : (
            <p>Not Sugar Fan? </p>
          )}
          <p>Click below to login from a different Account</p>
          <button
            onClick={() => navigate("/login")}
            style={{
              backgroundColor: "black",
              borderRadius: "10px",
              color: "white",
              padding: "0.5%",
              paddingRight: "1%",
              paddingLeft: "1%",
            }}
          >
            Login
          </button>
        </div>
      ) : null}

      {openNow === "orders" ? <div>
        {account.order ? <div> Orders</div> : <p>No orders yet</p>}
      </div>:null}

      {openNow === "wishlist" ? <div> 

        {account.wishlist.length >0 ? <div> 
           {account.wishlist.map((ele)=>{
            <div>
                <img src={ele.img}/>
            </div>
           })}

        </div>:<p>No items in wishlist</p>}
      </div> : null}
    </div>
    </div>
  </>
  
  );
};

export default AccountBody;
