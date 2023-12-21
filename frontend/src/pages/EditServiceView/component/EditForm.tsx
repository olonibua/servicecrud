import React, { ChangeEvent } from "react";
import { EditFormProps } from "../../../models/Interface";

const EditForm: React.FC<EditFormProps> = ({
  handleFormData,
  formData,
  editService,
}) => {
  return (
    <>
      <div className="grid grid-cols-4 col-span-2">
        <div className="border p-3 md:p-10 ">
          <h2 className="flex justify-start text-center rounded md:ml-8 text-[15px] md:text-[21px] font-semibold p-2 ">
            Service
          </h2>
        </div>
        <div className="col-span-3 border p-6 md:p-10 space-y-4 bg-white0 bg-slate-50 ">
          <div className="grid ">
            <label className="flex text-[13px] md:text-[18px] justify-start font-medium">
              Service:
            </label>
            <input
              type="text"
              name="service"
              className="outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border"
              onChange={handleFormData}
              value={formData.service}
              placeholder="input service"
            />
          </div>
          <div className="grid">
            <label className="flex justify-start text-[13px] md:text-[18px] mt-2 font-medium">
              Category:
            </label>
            <input
              type="text"
              name="category"
              className="outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border"
              onChange={handleFormData}
              value={formData.category}
              placeholder="input category"
            />
          </div>

          <div className="">
            <label className="flex mt-5 md:mt-8 justify-start text-[13px] md:text-[18px] my-2 md:my-4 font-semibold">
              Contact:
            </label>
            <div className="grid md:flex w-full p-2 md:p-0">
              <div className="grid w-full">
                <label className="flex justify-start text-[13px] md:text-[18px]  font-medium ">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  className="outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border mb-4 md:mb-0"
                  onChange={handleFormData}
                  value={formData.contact?.name}
                  placeholder="input name"
                />
              </div>
              <div className="grid w-full md:mx-4">
                <label className="flex justify-start text-[13px] md:text-[18px]  font-medium ">
                  Email:
                </label>
                <input
                  type="text"
                  name="email"
                  className="outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border mb-4 md:mb-0"
                  onChange={handleFormData}
                  placeholder="input email"
                  value={formData.contact?.email}
                />
              </div>
              <div className="grid w-full">
                <label className="flex justify-start text-[13px] md:text-[18px]  font-medium ">
                  Phone:
                </label>
                <input
                  type="text"
                  name="phone"
                  className="outline-none text-[13px] md:text-[18px] h-8 md:h-10 mt-2 p-2 rounded-md border mb-4 md:mb-0"
                  onChange={handleFormData}
                  placeholder="input phone"
                  value={formData.contact?.phone}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[200px]">
        <button
          onClick={editService}
          className="text-center hover:bg-purple-600 hover:text-white hover:border-0s justify-center border bg-white border-[#42424255] bg-[#29292988] h-8 md:h-10 backdrop:bg-[#e4e4e7] rounded-lg my-5 w-[140px] text-[13px] font-semibold"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default EditForm;
