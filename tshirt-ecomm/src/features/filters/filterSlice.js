import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  selectedGenders: [],
  selectedColors: [],
  selectedTypes: [],
  selectedPriceRanges: [],
};

const filterSlice = createSlice({
  name: "filters",

  initialState,

  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleGender: (state, action) => {
        const value = action.payload;
  
        if (state.selectedGenders.includes(value)) {
          state.selectedGenders =
            state.selectedGenders.filter(
              (item) => item !== value
            );
        } else {
          state.selectedGenders.push(value);
        }
      },
      toggleColor: (state, action) => {
        const value = action.payload;
  
        if (state.selectedColors.includes(value)) {
          state.selectedColors =
            state.selectedColors.filter(
              (item) => item !== value
            );
        } else {
          state.selectedColors.push(value);
        }
      },
      toggleType: (state, action) => {
        const value = action.payload;
  
        if (state.selectedTypes.includes(value)) {
          state.selectedTypes =
            state.selectedTypes.filter(
              (item) => item !== value
            );
        } else {
          state.selectedTypes.push(value);
        }
      },
      togglePriceRange: (state, action) => {
        const value = action.payload;
  
        if (state.selectedPriceRanges.includes(value)) {
          state.selectedPriceRanges =
            state.selectedPriceRanges.filter(
              (item) => item !== value
            );
        } else {
          state.selectedPriceRanges.push(value);
        }
      },
  },
});

export const { setSearchQuery,toggleGender,
    toggleColor,
    toggleType,togglePriceRange, } = filterSlice.actions;

export default filterSlice.reducer;