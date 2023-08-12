import { createContext, useReducer, useState } from "react";
import { inventoryData } from "../db/db";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [filter, setFilter] = useState();
  const [checkbox, setCheckbox] = useState();
  const [sort, setSort] = useState();

  const departments = inventoryData
    .map((item) => item.department)
    .filter((value, index, array) => array.indexOf(value) === index);

  const data = JSON.parse(localStorage.getItem("details"));
  console.log(data);
  const initialData = {
    data: data ? data.data : inventoryData,
    departments: departments,
  };
  const inventoryReducer = (state, action) => {
    if (action.type === "new") {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
  };
  const [state, dispatch] = useReducer(inventoryReducer, initialData);
  localStorage.setItem("details", JSON.stringify(state));

  const filterData = () => {
    let data = state.data;

    if (filter) {
      data = data.filter((item) => item.department === filter);
    }
    if (checkbox) {
      data = data.filter((item) => item.stock < 11);
    }
    if (sort === "name") {
      data = [...data].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === "price") {
      data = [...data].sort((a, b) => a.price - b.price);
    }
    if (sort === "stock") {
      data = [...data].sort((a, b) => a.stock - b.stock);
    }
    return data;
  };
  return (
    <InventoryContext.Provider
      value={{
        state,
        dispatch,
        filter,
        setFilter,
        setCheckbox,
        setSort,
        filterData,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
