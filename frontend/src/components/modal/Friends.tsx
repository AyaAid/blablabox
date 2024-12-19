import React, { useState } from "react";
import "./Friends.css";
import { ShareSocial } from "react-share-social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Ajouter un ami
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
              <FontAwesomeIcon icon={faXmark} className="close-modal-icon" />
            </button>
            <ShareSocial
              url="url_to_share.com"
              socialTypes={[
                "facebook",
                "twitter",
                "reddit",
                "linkedin",
                "whatsapp",
              ]}
            />
          </div>
        </div>
      )}
    </>
  );
}
