import React from "react";

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface IShowService {
  handleDelete: (item: any) => void;
  handleEdit: (item: any) => void;
  searchWord: any;
  handleInputSearch: any;
  filteredService: any;
}

const ShowService: React.FC<IShowService> = ({
  handleDelete,
  handleEdit,
  searchWord,
  handleInputSearch,
  filteredService,
}) => {
  return (
    <div className="bg-[#ffffff] p-10">
      <div className=" h-[70px] md:h-[103px] max-w-[1300px] movingGradient  mx-auto justify-start rounded-[6px] border p-5 ">
        <input
          value={searchWord}
          onChange={handleInputSearch}
          className="max-w-[300px] w-[270px] md:w-[550px] outline-none text-black text-[12px] md:text-[15px] border h-8 md:h-16 p-2 rounded-md"
          placeholder="search here"
          type="text"
        />
      </div>
      <div>
        {filteredService?.map((item: any) => (
          <div
            key={item._id}
            className="text-white p-3 md:p-5 flex max-w-[500px] md:max-w-[800px] border-purple-500 mt-5 lg:max-w-[1300px] mx-auto justify-between border h-20 md:h-32 text-center rounded-[12px]"
          >
            <div className="grid">
              <div className="flex gap-2 md:gap-3 text-center">
                <h2 className="text-[#371941f5] text-[11px] md:text-[18px] font-bold">
                  {item.service.charAt(0).toUpperCase() + item.service.slice(1)}
                  {";"}
                </h2>
                <h2 className="text-[#371941f5] text-[11px] md:text-[18px] font-bold">
                  {item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)}
                </h2>
              </div>
              <div className="flex md:justify-between text-center">
                <h2 className="border-2 text-[8px] md:text-[15px] bg-[#4a93d8] p-1 md:p-2 h-6 md:h-10 font-semibold rounded-lg justify-center align-center">
                  {item.contact?.name.charAt(0).toUpperCase() +
                    item.contact?.name.slice(1)}
                </h2>
                <h2 className="mx-4 border-2 text-[8px] md:text-[15px] bg-[#bd5de2] p-1 md:p-2 h-6 md:h-10 font-semibold rounded-lg justify-center align-center">
                  {item.contact?.email}
                </h2>
                <h2 className="border-2 text-[8px] md:text-[15px] bg-[#bd5de2] p-1 md:p-2 h-6 md:h-10 font-semibold rounded-lg justify-center align-center">
                  {item.contact?.phone}
                </h2>
              </div>
            </div>

            <div className="grid md:flex md:justify-between gap-2 md:gap-28">
              <FaEdit
                onClick={() => handleEdit(item)}
                className="text-center md:hidden text-[#371941f5] bg-white "
              />

              <button
                className="bg-[#371941f5] hidden md:block h-7 md:h-10 my-auto w-16 md:w-24 rounded p-1 text-[12px] md:text-[15px]"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>
              <MdDelete
                onClick={() => handleDelete(item)}
                className="text-center md:hidden text-[#371941f5] bg-white "
              />
              <button
                className="bg-[#371941f5] h-7 hidden md:block md:h-10 my-auto w-16 md:w-24 rounded p-1 text-[12px] md:text-[15px]"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowService;
