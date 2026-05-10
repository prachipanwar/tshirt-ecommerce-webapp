import { Search, SlidersHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../features/filters/filterSlice";
import FilterSidebar from "./FilterSidebar";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.filters.searchQuery);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };
  return (
    <div className="flex gap-2">
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

      <Sheet>
        <SheetTrigger asChild>
          <button
            className="
        flex h-11 w-11 items-center
        justify-center rounded-md border
        bg-white lg:hidden
      "
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[300px] overflow-y-auto">
          <h2 className="mb-6 text-xl font-semibold">Filters</h2>

          <FilterSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SearchBar;
