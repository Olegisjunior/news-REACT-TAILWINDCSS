import classes from "./Categories.module.css";

export const Categories = ({
  categories,
  setSelectedCategories,
  selectedCategories,
}) => {
  return (
    <div className={classes.categories}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategories(category)}
            className={
              selectedCategories === category ? classes.active : classes.item
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
