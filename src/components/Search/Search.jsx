export const Search = ({ keyword, setKeyword }) => {
  return (
    <div className="flex w-full bg-white gap-3">
      <input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        placeholder="React"
        type="text"
        className="w-full p-2.5 border border-solid border-[#f2f3f5] rounded-xl"
      ></input>
    </div>
  );
};

export default Search;
