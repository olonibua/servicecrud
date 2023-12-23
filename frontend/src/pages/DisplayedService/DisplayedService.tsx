import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveServices } from "../../redux/actions";
import "./DisplayedService.css";
import { useGetServices } from "./hook/useGetServices";
import NavBar from "../../components/NavBar";
import { useHandleDelete } from "./hook/useHandleDelete";
import { useHandleFilterService } from "./hook/useHandleFilterService";
import Footer from "../../components/Footer";
import ShowService from "./component/ShowService";

const DisplayedService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getServices } = useGetServices();
  const { handleDelete } = useHandleDelete();

  const service = useSelector((state: any) => state.helpers.services);
  const getServicesFromApi = async () => {
    const services = await getServices();
    dispatch(saveServices(services));
  };

  const { filteredService, searchWord, handleInputSearch } =
    useHandleFilterService(service);

  useEffect(() => {
    getServicesFromApi();
  }, []);

  const handleEdit = (userData: any) => {
    navigate("/editService", { state: { userData } });
  };

  return (
    <div className="">
      <NavBar />
      <ShowService
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchWord={searchWord}
        handleInputSearch={handleInputSearch}
        filteredService={filteredService}
      />
      <Footer />
    </div>
  );
};

export default DisplayedService;
