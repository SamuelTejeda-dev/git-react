import axios from "axios";
import { API_URL } from "../App";
import { useState } from "react";

export function useGetUsers() {
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      return res.data.data;
    } catch (err) {
      console.error("Failed to fetch users:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { getUsers, loading };
}
