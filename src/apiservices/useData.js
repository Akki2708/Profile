import { useState, useEffect } from "react";
import { fetchGoqiiFriend, utils } from "./api";

export const useData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGoqiiFriend();
        if (response.data?.data?.data) {
          setData(response.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("API Error:", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, stats: data ? utils.extractStats(data) : null };
};
