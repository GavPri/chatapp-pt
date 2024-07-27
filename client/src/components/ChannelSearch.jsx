import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { IoIosSearch } from "react-icons/io";

const ChannelSearch = () => {
  return (
    // ---- Component wrapper
    <div className="relative flex justify-center items-center pt-[16px]">
      {/* ----- Search input wrapper */}
      <div className="flex justify-center items-center h-40 bg- bg-slate-100 rounded-md border-2-transparent width w-10/12">
        {/* Icon  */}
        <div className="flex justify-center">
          <IoIosSearch />
        </div>
        <input
          type="text"
          value={query}
          onChange={onUserSearch}
          placeholder="Search"
          className="px-4 py2"
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
