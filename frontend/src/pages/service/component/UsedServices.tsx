import React from "react";
import node from "../../../models/icons/node.png";
import react from "../../../models/icons/react.png";
import mongo from "../../../models/icons/mongo.png";
import redux from "../../../models/icons/redux.png";
import tailwind from "../../../models/icons/tailwind.png";
import express from "../../../models/icons/express.png";

const UsedServices = () => {
  return (
    <div className="mx-auto max-w-[1300px] my-9 p-3">
      <h2 className="text-black text-[13px] md:text-[18px] font-semibold p-3">
        Technologies used
      </h2>
      <div className="grid grid-cols-2 p-3 md:grid-cols-3 mx-auto max-w-[1300px] gap-4">
        <div className="item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] ">
          <img
            src={node}
            className="h-9 w-9 bg-white border p-[2px] rounded-full"
            alt="node"
          />
          <div className="grid p-[4px] mx-1">
            <h2 className="text-[14px] font-bold">Node</h2>
            <span className=" text-[12px] font-thin text-[#3d3d3d]">
              Backend lauguage
            </span>
          </div>
        </div>
        <div className="item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] ">
          <img
            src={react}
            className="h-9 w-9 bg-white border p-[2px] rounded-full"
            alt="node"
          />

          <div className="grid p-[4px] mx-1">
            <h2 className="text-[14px] font-bold">React</h2>
            <span className=" text-[12px] font-thin text-[#3d3d3d]">
              Frontend lauguage
            </span>
          </div>
        </div>
        <div className="item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] ">
          <img
            src={express}
            className="h-9 w-9 bg-white border p-[2px] rounded-full"
            alt="node"
          />

          <div className="grid p-[4px] mx-1">
            <h2 className="text-[14px] font-bold">Express</h2>
            <span className=" text-[12px] font-thin text-[#3d3d3d]">
              Node framework
            </span>
          </div>
        </div>
        <div className="item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] ">
          <img
            src={mongo}
            className="h-9 w-9 bg-white border p-[2px] rounded-full"
            alt="node"
          />

          <div className="grid p-[4px] mx-1">
            <h2 className="text-[14px] font-bold">MongoDb</h2>
            <span className=" text-[12px] font-thin text-[#3d3d3d]">
              NOSQL database
            </span>
          </div>
        </div>
        <div className="item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] ">
          <img
            src={redux}
            className="h-9 w-9 bg-white border p-[2px] rounded-full"
            alt="node"
          />

          <div className="grid p-[4px] mx-1">
            <h2 className="text-[14px] font-bold">Redux</h2>
            <span className=" text-[12px] font-thin text-[#3d3d3d]">
              State Management
            </span>
          </div>
        </div>
        <div className="item border-2 flex p-2 rounded-lg mt-1 max-w-[100%] text-black h-[60px] ">
          <img
            src={tailwind}
            className="h-9 w-9 bg-white border p-[2px] rounded-full"
            alt="node"
          />
          <div className="grid p-[4px] mx-1">
            <h2 className="text-[14px] font-bold">TailwindCss</h2>
            <span className=" text-[12px] font-thin text-[#3d3d3d]">
              Styling
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedServices;
