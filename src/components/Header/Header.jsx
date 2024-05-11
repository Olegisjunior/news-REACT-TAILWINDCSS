import { formatDate } from "../helpers/formatDate";

export const Header = () => {
  return (
    <header className="flex w-full px-6 py-3 bg-white border-b-2 border-almost-white flex-col gap-y-3">
      <h1 className="font-bold text-3xl">NEWS REACT+TAILWIND</h1>
      <p className="text-base">{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
