import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button/Button";
import DiscussionsList from "./discussions-list/DiscussionsList";
import "./List.css";
import { faBars, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const List = () => {
  const [searchValue, setSearchValue] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonMode, setButtonMode] = useState(false);

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMode = () => {
    setButtonMode(!buttonMode);
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
    <div
      className={`list-container ${menuOpen ? "active" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="list-container-hamburger" onClick={openMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className="list-container-hamburger-icon"
        />
      </div>
      <div className={`list-container-elements ${menuOpen ? "active" : ""}`}>
        <div className="list-container-elements-profil-container">
          <div className="list-container-elements-profil-container-profil"></div>

          <p>John Doe</p>
          <Button buttonMode={buttonMode} onChangeMode={toggleMode} />
        </div>
        <input
          className="input"
          placeholder={
            buttonMode ? "Rechercher une demande" : "Rechercher un ami"
          }
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </div>
      {menuOpen && <DiscussionsList search={searchValue} mode={buttonMode} />}

      <div className={`list-container-bottom ${menuOpen ? "active" : ""}`}>
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
