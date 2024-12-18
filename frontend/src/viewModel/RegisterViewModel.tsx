import { useState } from "react";
import React from "react";

export type RegisterPayload = {
  username: string;
  password: string;
};

export const useRegisterViewModel = () => {
  const [loading, setLoading] = useState(false);

  const register = async (payload: RegisterPayload) => {
    setLoading(true);
    try {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

      const userExists = existingUsers.some(
        (user: RegisterPayload) => user.username === payload.username
      );

      if (userExists) {
        throw new Error("Ce nom d'utilisateur est déjà pris.");
      }

      const updatedUsers = [...existingUsers, payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
};
