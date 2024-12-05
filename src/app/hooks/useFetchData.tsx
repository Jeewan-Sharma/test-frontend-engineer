import { useState, useEffect } from "react";
import { IProduct } from "../types/IProducts";

type FetchDataProps = {
  url: string;
  page: number;
  limit: number;
};

const useFetchProducts = ({ url, page, limit }: FetchDataProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const offset = (page - 1) * limit;
        const response = await fetch(`${url}?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.length < limit) {
          setHasMore(false); // No more data available
        }

        setData((prevData) => [...prevData, ...result]); // Append data
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, url, limit]); // Re-fetch data when page or limit changes

  return { data, loading, error, hasMore };
};

export default useFetchProducts;
