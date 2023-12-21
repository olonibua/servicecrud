import { useEffect, useState } from "react";

export const useHandleService = () => {
  const [message, setMessage] = useState("");

  const [isMessageVisible, setIsMessageVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setIsMessageVisible(true);

      const timeoutId = setTimeout(() => {
        setIsMessageVisible(false);
        setMessage(""); // Clear the message after hiding it
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  const initialFormData = {
    service: "",
    category: "",
    contact: { name: "", email: "", phone: "" },
  };

  const [formData, setFormData] = useState(initialFormData);

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

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return {
    formData,
    handleFormData,
    resetForm,
    message,
    setMessage,
    isMessageVisible,
  };
};
