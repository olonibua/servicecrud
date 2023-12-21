import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateService } from "./hook/useCreateService";
import { useHandleService } from "./hook/useHandleService";
import CreateForm from "./component/CreateForm";

const CreateService = () => {
  const {
    formData,
    handleFormData,
    resetForm,
    message,
    setMessage,
    isMessageVisible,
  } = useHandleService();
  const { createService } = useCreateService(formData, resetForm, setMessage);

  return (
    <div className="bg-white text-black">
      <div className="h-16 md:h-20 flex justify-between text-center ">
        <h2 className="p-5 md:pl-20 text-[15px] md:text-[23px] text-purple-800 font-bold">
          Create Service
        </h2>
        <div>
          <Link to="/service">
            <button className="text-center md:mr-20 border mx-10 hover:bg-purple-600 hover:text-white bg-white border-[#42424255] bg-[#29292988] h-7 md:h-10 rounded-lg my-5 w-[90px] md:w-[140px] text-[13px] font-semibold">
              close
            </button>
          </Link>
        </div>
      </div>
      <CreateForm
        createService={createService}
        handleFormData={handleFormData}
        formData={formData}
        message={message}
        isMessageVisible={isMessageVisible}
      />
    </div>
  );
};

export default CreateService;
