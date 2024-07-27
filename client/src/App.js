import React from "react";
// ---- imports for chat app
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

// ----- API key
const apiKey = "7dcuwnvqfkfp";

// create a stream chat instance
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="bg-slate-500 flex flex-1 h-screen">
      {/* ---- Chat */}
      <Chat client={client}>
        {/* ----- ChannelListContainer */}
        <></>
        {/* ----- ChannelContainer */}
        <></>
      </Chat>
    </div>
  );
};

export default App;
