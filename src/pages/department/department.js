import { useNavigate } from "react-router";
import "./department.css";
import { useContext } from "react";
import { InventoryContext } from "../../context/inventoryContext";

export const Department = () => {
  const { state, setFilter } = useContext(InventoryContext);

  const navigate = useNavigate();

  return (
    <div className="departments">
      {state.departments.map((item) => (
        <div
          key={item}
          className="each-department"
          onClick={() => {
            setFilter(item);
            navigate("/products");
          }}
        >
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};
