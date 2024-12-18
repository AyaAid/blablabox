import { useState } from "react";
import Friend from "./friends/Friend";
import "./FriendList.css";
import ButtonAdd from "../button/ButtonAdd";
import React from "react";
import ShareOnSocial from "react-share-on-social";
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
    <div>
      {filteredFriends.length > 0 ? (
        filteredFriends.map((friend) => (
          <Friend key={friend.id} name={friend.name} />
        ))
      ) : (
        <p>Aucun ami</p>
      )}

      <Popup
        wide
        trigger={
          <Button>
            <FontAwesomeIcon icon={faUserPlus} />
          </Button>
        }
        on="click"
      >
        <Grid divided columns="equal">
          <GridColumn>
            <ShareOnSocial
              textToShare="Check out this new wardrobe I just found from IKEA!"
              link="https://ikea.com/wardrobes/kalle"
              linkTitle="KALLE Wardorbe which chooses your clothes for you using AI - IKEA"
              linkMetaDesc="Stop going through the agony of choosing clothes that fit the weather and your mood."
              noReferer
            >
              <button>
                <FontAwesomeIcon icon={faUserPlus} /> <p>Partager un lien </p>
              </button>
            </ShareOnSocial>
          </GridColumn>
          <GridColumn>
            <ButtonAdd />
          </GridColumn>
        </Grid>
      </Popup>
    </div>
  );
};

export default FriendList;
