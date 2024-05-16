import NewsBanner from "../../NewsBanner/NewsBanner";
import { getCategories, getNews } from "../../../API/ApiNews";
import NewsList from "../../NewsList/NewsList";
import Pagination from "../../Pagination/Pagination";
import Categories from "../../Categories/Categories";
import Search from "../../Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGE } from "../../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

export const Main = () => {
  //state's
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  // api
  const debouncedKeyword = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeyword,
  });

  const { data: dataCategories } = useFetch(getCategories);

  // handleFunctions
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  return (
    <main className="w-full flex flex-col gap-y-8">
      <Search
        keyword={filters.keywords}
        setKeyword={(keywords) => changeFilters("keywords", keywords)}
      />

      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategories={(category) => {
            changeFilters("category", category);
          }}
          selectedCategories={filters.category}
        />
      ) : null}

      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <NewsList isLoading={isLoading} news={data && data.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePreviousPage={handlePreviousPage}
        totalPage={TOTAL_PAGE}
        currentPage={filters.page_number}
      />
    </main>
  );
};
