import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FriendRequest.css";

const FriendRequest: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const url = new URLSearchParams(window.location.search);
  const sessionUsername = url.get("username");
  const receiverId = url.get("id");

  const currentPath = window.location.pathname;
  if (
    currentPath !== "/friend-request" || // Vérifie le chemin
    !sessionUsername || // Le nom d'utilisateur est obligatoire (session en cours)
    !receiverId // receiverId dépend de la session
  ) {
    return null; // Bloque l'affichage si les conditions ne sont pas remplies
  }

  const handleApiRequest = async () => {
    try {
      const id = uuidv4(); // Génère un ID unique pour la demande
      const response = await fetch(
        `http://localhost:3000/social/friend-request/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiverId: receiverId,
          }),
        }
      );
      const data = await response.json();
      console.log("API Response:", data);
      alert(
        "Demande d'ami envoyée avec succès ! Consultez la console pour les détails."
      );
    } catch (error) {
      console.error("Échec de l'envoi de la demande :", error);
      alert("Échec de la demande. Consultez la console pour les détails.");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Demande d'ami</h2>
        <p>Utilisateur (session) : {sessionUsername}</p>
        <p>ID du destinataire : {receiverId}</p>
        <p>Choisissez une action :</p>
        <div className="popup-buttons">
          <button onClick={handleApiRequest}>Envoyer la demande</button>
          <button onClick={handleClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
