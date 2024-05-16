import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../helpers/hocs/withSkeleton";

export const NewsList = ({ news }) => {
  return (
    <ul className="flex w-full flex-col gap-6">
      {news.map((item) => {
        return <NewsItem key={item.id} item={item}></NewsItem>;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
