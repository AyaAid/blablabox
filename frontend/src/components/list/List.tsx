import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button/Button";
import DiscussionsList from "./discussions-list/DiscussionsList";
import "./List.css";
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

const List = () => {
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = (event) => {
    const listContainer = document.querySelector(".list-container");

    if (listContainer && !listContainer.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={`list-container ${menuOpen ? "active" : ""}`}>
      <div className="list-container-hamburger" onClick={openMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className="list-container-hamburger-icon"
        />
      </div>
      <div className={`list-container-elements ${menuOpen ? "active" : ""}`}>
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
    </div>
  );
};

export default List;