// src/usecases/useAddUser.ts
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../App";

export function useAddUser() {
  const [loading, setLoading] = useState(false);

  const addUser = async (user: { firstName: string; lastName: string; email: string }) => {
    setLoading(true);
    try {
      const res = await axios.post(API_URL, user);
      return res.data;
    } catch (err) {
      console.error("Failed to add user:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading };
}
