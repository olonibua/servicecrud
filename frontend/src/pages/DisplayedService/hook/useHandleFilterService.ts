import React, { useEffect, useState } from "react";

export const useHandleFilterService = (service: any) => {
  const [searchWord, setSearchWord] = useState("");
  const [filteredService, setFilteredService] = useState([]);
  const handleInputSearch = (event: any) => {
    setSearchWord(event.target.value);
  };

  const searchFilteredServices = () => {
    const filtered = service.filter((item: any) =>
      item.service?.toLowerCase().includes(searchWord?.toLowerCase())
    );
    setFilteredService(filtered);
  };

  useEffect(() => {
    searchFilteredServices();
  }, [searchWord, service]);

  return {
    filteredService,
    searchWord,
    handleInputSearch,
    searchFilteredServices,
  };
};
