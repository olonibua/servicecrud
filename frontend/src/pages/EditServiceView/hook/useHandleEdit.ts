import { useState } from "react";
import { IFormData } from "../../../models/Interface";

export const useHandleEdit = (userData: any) => {
  const [formData, setFormData] = useState<IFormData>({
    service: userData.service,
    category: userData.category,
    contact: {
      name: userData.contact.name,
      email: userData.contact.email,
      phone: userData.contact.phone,
    }, // Initialize contact as an object
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "service") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        service: value,
      }));
    } else if (name === "category") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category: value,
      }));
    } else if (name === "name" || name === "email" || name === "phone") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        contact: {
          ...prevFormData.contact,
          [name]: value,
        },
      }));
    }
  };

  return { handleFormData, formData };
};
