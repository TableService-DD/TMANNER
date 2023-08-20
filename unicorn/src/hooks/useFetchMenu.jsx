import { useState, useEffect } from "react";
import { fetchMenuData } from "../api/data";

export default function useFetchMenu() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const menuData = await fetchMenuData();
        setMenu(menuData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { menu, loading, error };
}
