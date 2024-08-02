import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({ children, type, channel }) => {
  // useChatContectHook
  const { channel: activeChannel, client } = useChatContext();

  //   channel preview element
  //   Preview for a channel that has multiple users
  const ChannelPreview = () => (
    <p># {channel?.data?.name || channel?.data?.id}</p>
  );

  //   Preview for Direct messages
  //     The data returned is not an array.
  //   It's an object containing user ID's and an object as key value pairs.
  //     It will look like this
  //   {
  //           '123' : {}
  //           '12656': {}
  //           '87458' : {}
  //   }
  //  Use Object.values to return an array. Then call the filter method.
  const DirectMessagesPreview = () => {
    const members = Object.values(channel.state.members).filter(
      // Deconstructing members to remove client user from list preview.
      ({ user }) => user.id !== client.userID
    );
    // Return statement containing avatar
    return (
      <div>
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
          size={24}
        />
        <p> name={members[0]?.user?.fullName}</p>
      </div>
    );
  };

  return (
    <div
      className={channel?.id === activeChannel ? "" : ""}
      onClick={() => {
        console.log(channel);
      }}
    ></div>
  );
};

export default TeamChannelPreview;
