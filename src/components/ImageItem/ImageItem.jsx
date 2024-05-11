import classes from "./ImageItem.module.css";
export const ImageItem = ({ image }) => {
  return (
    <div className={classes.wrapper}>
      {image ? <img src={image} alt="image" className={classes.image} /> : null}
    </div>
  );
};
