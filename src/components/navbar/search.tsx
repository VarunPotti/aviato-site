import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

const Search = () => {
  return (
    <div className="flex gap-5 h-14 w-4/12">
      <div className="w-full h-full bg-gray rounded-2xl backdrop-blur-[19.5px] flex items-center px-5 gap-4">
        <SearchIcon />
        <input
          className="w-full h-full bg-transparent outline-none caret-dodgerBlue text-xs leading-[15px] font-medium text-waterloo select-none"
          placeholder="Search"
        ></input>
      </div>
      <button className="bg-dodgerBlue p-[21.33px] rounded-full hover:bg-opacity-90 transition-all duration-150">
        <PlusIcon />
      </button>
    </div>
  );
};

export default Search;
