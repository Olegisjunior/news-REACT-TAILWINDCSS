import { formatTimeAgo } from "../helpers/formatTimeAgo";

export const NewsItem = ({ item }) => {
  return (
    <li className="item flex w-full gap-3">
      <div
        className="wrapper w-16 h-16 bg-almost-white bg-center bg-cover flex-shring-0"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="info flex flex-col gap-2 ">
        <h1 className="title font-bold text-[14px]">{item.title}</h1>
        <p className="extra text-sm text-my-gray">
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;

//18:20 / 37:01
