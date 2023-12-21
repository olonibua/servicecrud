import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "./Context/UseContext";
import LogIn from "./User/LogIn";
import CreateAccount from "./User/CreateAccount";
import DisplayedService from "../pages/DisplayedService/DisplayedService";

const NavBar = () => {
  const { logoutUser } = useUserContext();
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [showService, setShowService] = useState<boolean>(false);

  const logOut = () => {
    logoutUser();
    navigate("/");
  };

  function openService() {
    setShowService(true); // Delay navigation slightly to allow state update
    navigate("/service");
  }

  return (
    <>
      <div className="h-24 text-center border-b-2 drop-shadow-sm bg-[#ffffff] border-[#e9e9e9] text-black p-5">
        <div className="flex justify-between mt-2">
          <h2 className="text-[15px] md:text-[25px] text-[#181818] font-semibold md:pl-20">
            Service Crud
          </h2>
          <div className="flex md:pr-16">
            {/* <ul className="flex gap-5">
            <li>home</li>
            <li>service</li>
          </ul> */}
            {!user ? (
              <div>
                <button
                  onClick={() => setOpenSignIn(!openSignIn)}
                  className="text-center border-2 bg-white border-[#42424255] bg-[#29292988] mx-1 md:mx-4 backdrop:bg-[#e4e4e7] rounded-lg h-8 w-[90px] md:w-[100px] text-[11px] md:text-[13px] font-semibold"
                >
                  Sign in
                </button>

                <button
                  onClick={() => setOpenRegister(!openRegister)}
                  className="text-center border-2 bg-white border-[#42424255] bg-[#29292988] mx-1 md:mx-4 backdrop:bg-[#e4e4e7] rounded-lg h-8 w-[90px] md:w-[120px] text-[11px] md:text-[13px] font-semibold"
                >
                  Create account
                </button>
              </div>
            ) : null}
            <div className="flex align-middle justify-items-center">
              {user ? (
                <div>
                  <button
                    className="text-[11px] md:text-[15px] mx-2 mt-2 md:mt-1 cursor-pointer"
                    onClick={() => {
                      openService();
                    }}
                  >
                    Services
                  </button>
                  <Link to="/createService">
                    <button className="text-[11px] md:text-[15px] mx-2 mt-2 md:mt-1 cursor-pointer">
                      Create service
                    </button>
                  </Link>
                  <button
                    onClick={logOut}
                    className="text-center border-2 bg-white border-[#42424255] bg-[#29292988] mx-1 md:mx-4 backdrop:bg-[#e4e4e7] rounded-lg h-8 w-[90px] md:w-[100px] text-[11px] md:text-[13px] font-semibold"
                  >
                    Sign out
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className={openSignIn ? "z-1000" : "z-0"}>
        {openSignIn && (
          <div className="absolute top-0 mx-auto">
            <LogIn
              setOpenSignIn={setOpenSignIn}
              // setShowService={setShowService}
            />
          </div>
        )}
      </div>
      <div className={openRegister ? "z-1000" : "z-0"}>
        {openRegister && (
          <div className="absolute top-0 mx-auto">
            <CreateAccount
              setOpenRegister={setOpenRegister}
              setOpenSignIn={setOpenSignIn}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
