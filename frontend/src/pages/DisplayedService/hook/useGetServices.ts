import React from "react";
import axios from "axios";
import { useUserContext } from "../../../components/Context/UseContext";

export const useGetServices = () => {
  const { user } = useUserContext();
  const getServices = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${user?.accessToken}`,
      };

      const url = "https://service-crud-drqu.onrender.com/api/services";
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return { getServices };
};
