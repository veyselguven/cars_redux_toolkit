import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  // const cars = useSelector(({ cars: { data, searcTerm } }) => {
  //   return data.filter((car) =>
  //     car.name.toLowerCase().includes(searcTerm.toLowerCase())
  //   );
  //   // return state.cars.data;
  // });
  const { cars, name } = useSelector(({ form, cars: { data, searcTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searcTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });
  const dispatch = useDispatch();

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // decide if this car should be bold
    // state.for.name
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  //console.log("cars=>", cars);

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
