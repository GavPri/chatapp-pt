import React from "react";
// ---- stream chat react imports
import { ChannelList, useChatContext } from "stream-chat-react";
// ----- cookie import
import Cookies from "universal-cookie";
// ---- Icon imports
import { GiBiceps } from "react-icons/gi";
import { PiSignOutLight } from "react-icons/pi";

// ---- Sidebar
const SideBar = () => (
  <div className="w-1/12 bg-slate-300">
    {/* Icon */}
    <div className="group p-4 flex justify-center items-center text-slate-100 bg-slate-900 rounded-lg w-8/12 mx-auto my-6 transition-all duration-500 hover:cursor-pointer hover:bg-violet-600 hover:text-violet-100">
      <GiBiceps size={50} className="group-hover:scale-105" />
    </div>
    <div className="group p-4 flex justify-center items-center text-slate-100 bg-slate-900 rounded-lg w-8/12 mx-auto my-6 transition-all duration-500 hover:cursor-pointer hover:bg-violet-600 hover:text-violet-100">
      <PiSignOutLight size={50} className="group-hover:scale-105" />
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="w-full h-24 mt-6">
    <p className="mx-auto text-center font-bold">Hybrid Training Center</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="flex flex-col bg-slate-400 w-2/12">
        <CompanyHeader />
      </div>
    </>
  );
};

export default ChannelListContainer;
