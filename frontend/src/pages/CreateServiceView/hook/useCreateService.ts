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
        // https://service-crud-drqu.onrender.com
        const url = "https://service-crud-drqu.onrender.com/api/services/";
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
// https://service-crud-drqu.onrender.com
