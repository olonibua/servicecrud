import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useEditService = (formData: any, user: any, userData: any) => {
  const navigate = useNavigate();
  const editService = async () => {
    try {
      if (!userData || !userData._id) {
        console.error("User data or user ID is undefined", userData._id);
        return;
      }

      const headers = {
        Authorization: `Bearer ${user.accessToken}`,
      };
      const url = `https://service-crud-drqu.onrender.com/api/services/${userData._id}`;
      const res = await axios.put(url, formData, { headers });
      if (res) {
        navigate("/service");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { editService };
};
