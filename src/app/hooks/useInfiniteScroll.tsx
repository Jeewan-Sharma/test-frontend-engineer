import { useEffect, useCallback } from "react";

const useInfiniteScroll = (
  loading: boolean,
  hasMore: boolean,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  listRef: React.RefObject<HTMLDivElement> // Ref for the list container
) => {
  const handleScroll = useCallback(() => {
    if (loading || !hasMore || !listRef.current) return;

    const listBottom = listRef.current.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    const threshold = 0;

    // Trigger loading when list bottom is near the viewport (300px from the bottom)
    if (listBottom - windowHeight <= threshold) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading, hasMore, setPage, listRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
};

export default useInfiniteScroll;
