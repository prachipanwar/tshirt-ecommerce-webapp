import { useSelector, useDispatch } from "react-redux";
import { getUniqueValues } from "../../utils/filterUtils";
import {
  toggleGender,
  toggleColor,
  toggleType,
  togglePriceRange,
} from "../../features/filters/filterSlice";

const FilterSideBar = () => {
  const products = useSelector((state) => state.products.items);

  const genders = getUniqueValues(products, "gender");
  const colors = getUniqueValues(products, "color");
  const types = getUniqueValues(products, "type");
  const dispatch = useDispatch();

  const {
    selectedGenders,
    selectedColors,
    selectedTypes,
    selectedPriceRanges,
  } = useSelector((state) => state.filters);
  const priceRanges = ["0-250", "251-450", "451+"];

  return (
    <aside className="w-full rounded-lg border bg-white p-4">
      {/* Gender */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">Gender</h3>

        <div className="space-y-2">
          {genders.map((gender) => (
            <label key={gender} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedGenders.includes(gender)}
                onChange={() => dispatch(toggleGender(gender))}
              />

              {gender}
            </label>
          ))}
        </div>
      </div>

      {/* Colour */}
      <div className="mb-6">
        <h3 className="mb-3 text-lg font-semibold">Colour</h3>

        <div className="space-y-2">
          {colors.map((color) => (
            <label key={color} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => dispatch(toggleColor(color))}
              />

              {color}
            </label>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <h3 className="mb-3 text-lg font-semibold">Type</h3>

        <div className="space-y-2">
          {types.map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => dispatch(toggleType(type))}
              />

              {type}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-lg font-semibold">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range)}
                onChange={() => dispatch(togglePriceRange(range))}
              />

              {range}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSideBar;
