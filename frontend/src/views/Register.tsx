import React, { useState } from "react";
import { useRegisterViewModel } from "../viewModel/registerViewModel";
import Notification from "../components/notification/Notification";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, loading } = useRegisterViewModel();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register({ username, password });
      setNotification({ message: "Inscription réussie !", type: "success" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setNotification({
        message: error.message || "Une erreur est survenue",
        type: "error",
      });
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrez votre nom d'utilisateur"
            required
          />
        </div>
        <div>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Inscription en cours..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default Register;
