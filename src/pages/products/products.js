import { useContext } from "react";
import { InventoryContext } from "../../context/inventoryContext";
import { useNavigate } from "react-router";
import "./products.css";
import { Link } from "react-router-dom";

export const Products = () => {
  const {
    state,
    dispatch,
    filter,
    setFilter,
    setCheckbox,
    setSort,
    filterData,
  } = useContext(InventoryContext);

  const navigate = useNavigate();
  const data = filterData();
  return (
    <div>
      <div className="product-title">
        <h2>Products</h2>
        <div className="department-filter">
          <select name="department" onChange={(e) => setFilter(e.target.value)}>
            <option selected disabled>
              All Departments
            </option>
            {state.departments.map((item) => (
              <option value={item} selected={filter === item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="stock-checkbox">
          <label>
            <input
              type="checkbox"
              onChange={(e) => setCheckbox(e.target.checked)}
            />
            Low Stock
          </label>
        </div>
        <div className="sort">
          <select name="sort" onChange={(e) => setSort(e.target.value)}>
            <option selected disabled>
              Sort Data
            </option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>

        <div>
          <h3 className="new" onClick={() => navigate("/product-management")}>
            New
          </h3>
        </div>
      </div>
      <div className="product-list">
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
          {data.map(
            ({
              id,
              department,
              name,
              description,
              price,
              stock,
              supplier,
              imageUrl,
            }) => (
              <tr key={id}>
                <td>
                  <img src={imageUrl} width="50" height="50" alt={name} />
                </td>
                <td>
                  <Link to={`/product/${id}`}>{name}</Link>
                </td>
                <td>{description}</td>
                <td>$ {price}</td>
                <td>{stock}</td>
                <td>{supplier}</td>
              </tr>
            )
          )}
        </table>
      </div>
    </div>
  );
};
