import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ children, type }) => {
  // useChatContectHook
  const { channel, client } = useChatContext();

  return <div>TeamChannelPreview</div>;
};

export default TeamChannelPreview;
