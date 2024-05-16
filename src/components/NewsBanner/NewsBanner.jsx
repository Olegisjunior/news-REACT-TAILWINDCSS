import { ImageItem } from "../ImageItem/ImageItem";
import { formatTimeAgo } from "../helpers/formatTimeAgo";
import withSkeleton from "../helpers/hocs/withSkeleton";

export const NewsBanner = ({ item }) => {
  return (
    <div className="flex w-full flex-col gap-y-3">
      <ImageItem image={item?.image} />
      <h1 className="font-bold text-base">{item.title}</h1>
      <p className="text-sm text-my-gray">
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, "banner", 1);

export default NewsBannerWithSkeleton;

//18:20 / 37:01
