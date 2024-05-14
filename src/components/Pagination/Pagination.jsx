export const Pagination = ({
  totalPage,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div
      className={`flex gap-3 align-center justify-center w-full 
      }`}
    >
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={`border-none  bg-white cursor ${
          currentPage <= 1 ? null : "hover:text-my-gray"
        }`}
      >
        {"<"}
      </button>
      <div className="flex align-center justify-center">
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              key={index}
              disabled={index + 1 === currentPage}
              className={`p-2 cursor border-none bg-white ${
                index + 1 === currentPage ? null : "hover:text-my-gray"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPage}
        onClick={handleNextPage}
        className={`border-none  bg-white cursor ${
          currentPage >= totalPage ? null : "hover:text-my-gray"
        }`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
