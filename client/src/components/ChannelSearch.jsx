import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import { IoIosSearch } from "react-icons/io";

const ChannelSearch = () => {
  // ---- useState for user search
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      // TODO fetch channels
    } catch (error) {
      setQuery("");
    }
  };

  //   onSearch function
  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);

    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  return (
    // ---- Component wrapper
    <div className="relative flex justify-center items-center mt-6">
      {/* ----- Search input wrapper */}
      <div className="group flex justify-center items-center bg-slate-100 rounded-md border-2-violet-500 width w-10/12 h-12 hover:border-2-violet-500">
        {/* Icon  */}
        <div className="flex justify-center items-center bg-slate-900 h-full text-violet-100 group-hover:bg-violet-500 w-2/12 transition-all duration-500 rounded-l-md">
          <IoIosSearch size={30} />
        </div>
        <input
          type="text"
          value={query}
          onChange={onSearch}
          placeholder="Search..."
          className="outline-none bg-transparent py-2 px-4 focus:border-transparent active:border-transparent text-slate-900 w-10/12"
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
