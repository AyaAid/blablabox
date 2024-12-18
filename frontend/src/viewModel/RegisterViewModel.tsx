import { useState } from "react";

// Définition du type pour le payload
export type RegisterPayload = {
  username: string;
  password: string;
};

// ViewModel pour la gestion du register
export const useRegisterViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const register = async (payload: RegisterPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorMessage =
          (await response.json()).message || "Erreur inconnue";
        throw new Error(errorMessage);
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
};
