import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searcTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searcTerm = action.payload;
    },
    addCar(state, action) {
      // Assuption :varsayim
      // action.payload ==={name:"ab",cost:1240}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        // id: Math.random(),
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // assuption :varsayim
      // action.payload= the id of the car we want to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
