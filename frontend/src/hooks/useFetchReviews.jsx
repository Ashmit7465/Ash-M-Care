import React from "react";
import { useEffect, useState } from "react";
import { token } from "../../config";

const useFetchReviews = (url) => {
  const [data, setData] = useState([]);

  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message);
        }

        setData(result.data);
        setReviews(result.reviews);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return {
      data,
      reviews,
      loading,
      error,
  }
};

export default useFetchReviews;
