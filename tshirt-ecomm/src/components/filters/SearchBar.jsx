import { Search,SlidersHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../features/filters/filterSlice";


const SearchBar = ({ onOpenFilters }) => {
    const dispatch = useDispatch();

  const searchQuery = useSelector(
    (state) => state.filters.searchQuery
  );

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <div className="flex gap-2">

    {/* Search Input */}
    <div className="relative flex-1">

      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        className="h-11 w-full rounded-md border border-gray-300 px-4 pr-12 outline-none focus:border-black"
      />

      <button className="search-button-container absolute right-0 top-0 flex h-11 w-12 items-center justify-center border-l">
        <Search className="h-5 w-5" />
      </button>

    </div>

    {/* Mobile Filter Button */}
    <button
      onClick={onOpenFilters}
      className="flex h-11 w-11 items-center justify-center rounded-md border bg-white lg:hidden"
    >
      <SlidersHorizontal className="h-5 w-5" />
    </button>

  </div>
)
  }

export default SearchBar;