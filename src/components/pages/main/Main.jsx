import { useEffect, useState } from "react";
import NewsBanner from "../../NewsBanner/NewsBanner";
import { getNews } from "../../../API/ApiNews";
import { NewsList } from "../../NewsList/NewsList";

export const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className="w-full flex flex-col gap-y-8">
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </main>
  );
};
