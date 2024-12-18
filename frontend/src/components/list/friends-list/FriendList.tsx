import { useState } from "react";
import "./FriendList.css";
import React from "react";
import ShareOnSocial from "react-share-on-social";
import { ShareSocial } from "react-share-social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { GridColumn, Button, Grid, Popup } from "semantic-ui-react";

interface FriendListProps {
  search: string;
}

const FriendList: React.FC<FriendListProps> = ({ search }) => {
  const [friends] = useState([
    { id: 1, name: "john doe" },
    { id: 2, name: "patrick jean" },
    { id: 3, name: "esteban dardillac" },
  ]);

  const filteredFriends = friends
    .filter((friend) =>
      friend.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ShareSocial
      url="url_to_share.com"
      socialTypes={["facebook", "twitter", "reddit", "linkedin", "whatsapp"]}
    />
  );
};

export default FriendList;
