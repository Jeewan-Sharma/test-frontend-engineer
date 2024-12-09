import { useState, useEffect } from "react";
import { IProduct, ApiResponse } from "@/app/types";
import { useLoading } from "../context/LoadingContext";

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

  const { setGlobalLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (page === 1) {
          setGlobalLoading(true);
        } else {
          setLoading(true);
        }

        const offset = (page - 1) * limit;
        const response = await fetch(`${url}?limit=${limit}&skip=${offset}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();

        if (result.products.length < limit) {
          setHasMore(false); // if No more data available
        }

        setData((prevData) => [...prevData, ...result.products]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error fetching data");
      } finally {
        if (page === 1) {
          setGlobalLoading(false);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [page, url, limit, setGlobalLoading]); // Re-fetching data when page or limit changes

  return { data, loading, error, hasMore };
};

export default useFetchProducts;
