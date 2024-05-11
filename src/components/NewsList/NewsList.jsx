import NewsItem from "../NewsItem/NewsItem";

export const NewsList = ({ news }) => {
  return (
    <ul className="flex w-full flex-col gap-6">
      {news.map((item) => {
        return <NewsItem key={item.id} item={item}></NewsItem>;
      })}
    </ul>
  );
};
