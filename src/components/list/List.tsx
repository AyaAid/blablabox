import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button/Button";
import DiscussionsList from "./discussions-list/DiscussionsList";
import "./List.css";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const List = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="list-container">
      <div className="profil-container">
        <div className="profil"></div>
        <p>John Doe</p>
        <Button />
      </div>
      <input
        className="input"
        placeholder="Rechercher une discussion"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <DiscussionsList search={searchValue} />
      <button className="list-button">
        <FontAwesomeIcon icon={faPowerOff} className="list-icon" />
        <p>Déconnexion</p>
      </button>
      <p className="version">version 1.0.0</p>
    </div>
  );
};

export default List
