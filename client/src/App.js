import React from "react";
// ---- imports for chat app
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { Auth } from "./components";
import { ChannelListContainer, ChannelContainer } from "./components";

// * Create a cookies instance
const cookies = new Cookies();

// ----- API key
const apiKey = "7dcuwnvqfkfp";
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);
// *Check for the authtoken
if (authToken) {
  client.connectUser(
    {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      fullName: cookies.get("fullName"),
      image: cookies.get("avatarURL"),
      hashedPassword: cookies.get("hashedPassword"),
      phoneNumber: cookies.get("phoneNumber"),
    },
    authToken
  );
}

// create a stream chat instance
const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="bg-slate-500 flex flex-1 h-screen">
      {/* ---- Chat */}
      <Chat client={client}>
        {/* ----- ChannelListContainer */}
        <ChannelListContainer />
        {/* ----- ChannelContainer */}
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
