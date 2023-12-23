import React, { useContext, useState } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UseContext";
import { SignInProps } from "../../models/Interface";
import { FaRegWindowClose } from "react-icons/fa";

const LogIn: React.FC<SignInProps> = ({ setOpenSignIn }) => {
  const { setLoggedInUser } = useUserContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const signInUser = async () => {
    const user = {
      email: email,
      password: password,
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "https://service-crud-drqu.onrender.com/api/users/login",
        user
      );
      const loggedUser = response.data;
      setLoggedInUser(loggedUser);
      if (loggedUser) {
        setOpenSignIn(false);
        // setShowService(true);
      }
    } catch (error: any) {
      console.log(
        "Error during sign in",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false); // Set loading to false after login request completes
    }
  };

  return (
    <div className="bg-[#000000] w-full bg-opacity-[0.5] z-[1000] ">
      <div className=" overflow-hidden  h-screen w-[98.9vw] max-w-screen">
        <div className=" text-center p-3 md:p-5 text-black mt-32 h-[230px] md:h-[380px] max-w-[250px] md:max-h-[400px] md:max-w-[400px] mx-auto rounded-lg bg-white drop-shadow-md">
          <button
            className="flex text-[15px] md:text-[25px] font-medium justify-end float-right mr-3"
            onClick={() => setOpenSignIn(false)}
          >
            <FaRegWindowClose />
          </button>
          <div className="pt-2 md:pt-10">
            <h2 className="text-[18px] md:text-[23px] font-semibold pt-8 pb-2">
              Sign In
            </h2>
            <div className="text-center flex border-2 mt-2 md:mt-5 bg-white border-[#42424255] h-8 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg max-w-[350px] text-[10px] md:text-[13px] font-semibold mx-auto">
              <label
                className="text-[15px] mt-1 md:text-[20px] mx-2"
                id="email-label"
                aria-labelledby="email-label"
              >
                Email:
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Input your Email Address"
                className="p-2 outline-none"
              />
            </div>

            <div className="text-center flex border-2 mt-2 md:mt-5 bg-white border-[#42424255] h-8 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg max-w-[350px] text-[10px] md:text-[13px] font-semibold mx-auto">
              <label className="text-[15px] mt-1 md:text-[20px] mx-1 md:mx-2 justify-start">
                Password:
              </label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="password"
                className="p-2 outline-none"
              />
            </div>
          </div>
          <button
            onClick={signInUser}
            className="text-center border-2 mt-2 md:mt-5 bg-white border-[#42424255]  backdrop:bg-[#e4e4e7] rounded-lg h-7 md:h-10 w-[100px] md:w-[150px] mx-2 text-[10px] md:text-[13px] font-semibold"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Logging In..." : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
