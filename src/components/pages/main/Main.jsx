import { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import { getCategories, getNews } from "../../../API/ApiNews";
import { NewsList } from "../../NewsList/NewsList";
import Skeleton from "../../Skeleton/Skeleton";
import Pagination from "../../Pagination/Pagination";
import Categories from "../../Categories/Categories";

export const Main = () => {
  //state's
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const totalPage = 10;
  const pageSize = 10;

  // handleFunctions
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

  // api
  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategories === "All" ? null : selectedCategories,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategories]);

  return (
    <main className="w-full flex flex-col gap-y-8">
      <Categories
        categories={categories}
        setSelectedCategories={setSelectedCategories}
        selectedCategories={selectedCategories}
      />

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
