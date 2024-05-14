import { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import { getNews } from "../../../API/ApiNews";
import { NewsList } from "../../NewsList/NewsList";
import Skeleton from "../../Skeleton/Skeleton";
import Pagination from "../../Pagination/Pagination";

export const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;
  const pageSize = 10;

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchNews = async (currentPage) => {
      try {
        setIsLoading(true);
        const response = await getNews(currentPage, pageSize);
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews(currentPage);
  }, [currentPage]);

  return (
    <main className="w-full flex flex-col gap-y-8">
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={12} type="items" />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </main>
  );
};
