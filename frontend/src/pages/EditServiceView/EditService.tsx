import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../components/Context/UseContext";
import { useEditService } from "./hook/useEditService";
import { useHandleEdit } from "./hook/useHandleEdit";
import EditForm from "./component/EditForm";

const EditService = () => {
  const { user } = useUserContext();
  const location = useLocation();
  const userData = location.state?.userData;

  const { formData, handleFormData } = useHandleEdit(userData);

  const { editService } = useEditService(formData, user, userData);

  return (
    <div className="bg-white text-black h-[100vh]">
      <div className="h-16 md:h-20 flex justify-between text-center ">
        <h2 className="p-5 md:pl-20 text-[15px] md:text-[23px] text-purple-700 font-bold">
          Edit Service
        </h2>
        <div>
          <Link to="/service">
            <button className="text-center md:mr-20 border mx-10 hover:bg-purple-600 hover:text-white bg-white border-[#42424255] bg-[#29292988] h-7 md:h-10 rounded-lg my-5 w-[90px] md:w-[140px] text-[13px] font-semibold">
              close
            </button>
          </Link>
        </div>
      </div>
      <EditForm
        handleFormData={handleFormData}
        formData={formData}
        editService={editService}
      />
    </div>
  );
};

export default EditService;
