import axios from "axios";
import { useState } from "react";
import { API_URL } from "../App";

export function useDeleteUser() {
  const [loading, setLoading] = useState(false);

  const deleteUser = async (id: number) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading };
}
