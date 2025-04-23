import axios from "axios";
import { useState } from "react";
import { API_URL } from "../App";

export function useUpdateUser() {
  const [loading, setLoading] = useState(false);

  const updateUser = async (id: number, user: { firstName: string; lastName: string; email: string }) => {
    setLoading(true);
    try {
      const res = await axios.put(`${API_URL}/${id}`, user);
      return res.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, loading };
}
