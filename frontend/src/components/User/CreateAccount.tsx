import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserProps } from "../../models/Interface";
import { FaRegWindowClose } from "react-icons/fa";

const CreateAccount: React.FC<registerUserProps> = ({
  setOpenRegister,
  setOpenSignIn,
}) => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name == "username") {
      setUserName(value);
    }
  };

  const register = async () => {
    const user = {
      username: username,
      email: email,
      password: password,
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        user
      );
      const registerUser = response.data;
      if (registerUser) {
        setOpenRegister(false);
        setOpenSignIn(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Set loading to false after login request completes
    }
  };

  return (
    <div className="bg-[#000000] w-full bg-opacity-[0.5] z-[1000] ">
      <div className="h-screen w-[98.9vw] max-w-screen overflow-hidden">
        <div className=" text-center p-3 md:p-5 text-black mt-32 h-[250px] md:h-[420px] max-w-[250px] md:max-h-[500px] md:max-w-[400px] mx-auto rounded-lg bg-white drop-shadow-md">
          <button
            className="flex text-[15px] md:text-[25px] font-medium justify-end float-right mr-3"
            onClick={() => setOpenRegister(false)}
          >
            <FaRegWindowClose />
          </button>
          <div className="pt-2 md:pt-10">
            <h2 className="text-[18px] md:text-[23px] font-semibold pt-8 pb-2">
              Create Account
            </h2>
            <div className="text-center p-1 flex border-2 mt-[4px] md:mt-5 bg-white border-[#42424255] h-7 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg max-w-[350px] text-[10px] md:text-[13px] font-semibold mx-auto">
              <label className="text-[13px] md:text-[20px] mx-1 md:mx-2 ">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Input your username"
                className="p-2 outline-none"
              />
            </div>
            <div className="text-center p-1 flex border-2 mt-[4px] md:mt-5 bg-white border-[#42424255] h-7 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg max-w-[350px] text-[10px] md:text-[13px] font-semibold mx-auto">
              <label className="text-[13px] md:text-[20px] mx-1 md:mx-2 ">
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

            <div className="text-center p-1 flex border-2 mt-[4px] md:mt-5 bg-white border-[#42424255] h-7 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg max-w-[350px] text-[10px] md:text-[13px] font-semibold mx-auto">
              <label className="text-[13px] md:text-[20px] mx-1 md:mx-2 justify-start">
                Password:
              </label>
              <input
                name="password"
                type="text"
                value={password}
                onChange={handleChange}
                placeholder="Input your password"
                className="p-2 outline-none"
              />
            </div>
          </div>
          <button
            onClick={register}
            className="text-center border-2 mt-2 md:mt-5 bg-white border-[#42424255]  backdrop:bg-[#e4e4e7] rounded-lg h-7 md:h-10 w-[100px] md:w-[150px] mx-2 text-[10px] md:text-[13px] font-semibold"
          >
            {loading ? "Signing In..." : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
