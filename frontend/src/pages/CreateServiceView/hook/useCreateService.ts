import React from "react";
import axios from "axios";
import { useUserContext } from "../../../components/Context/UseContext";
import { User } from "../../../models/Interface";

export const useCreateService = (
  formData: any,
  resetForm: any,
  setMessage: any
) => {
  const { user } = useUserContext();
  const createService = async () => {
    try {
      if (user) {
        const headers = {
          Authorization: `Bearer ${user?.accessToken}`,
        };
        // http://localhost:5001
        const url = "http://localhost:5001/api/services/";
        const response = await axios.post(url, formData, { headers });
        setMessage(response.request.statusText);
      }
    } catch (err: any) {
      // console.log(err.message);
      setMessage("Failed!");
    }
    resetForm();
  };

  return { createService };
};
// http://localhost:5001
