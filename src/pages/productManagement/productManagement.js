import { useContext, useState } from "react";
import { InventoryContext } from "../../context/inventoryContext";

export const ProductManagement = () => {
  const { state, dispatch } = useContext(InventoryContext);
  const [newData, setNewData] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  return (
    <div className="product-management">
      <h2>Add New Product</h2>
      <div>
        <p>Department</p>
        <div className="department-filter">
          <select
            name="department"
            onChange={(e) =>
              setNewData({ ...newData, department: e.target.value })
            }
          >
            <option selected disabled>
              All Departments
            </option>
            {state.departments.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <p>Name</p>
          <input
            onChange={(e) => setNewData({ ...newData, name: e.target.value })}
          />
        </div>
        <div>
          <p>Description</p>
          <input
            onChange={(e) =>
              setNewData({ ...newData, description: e.target.value })
            }
          />
        </div>
        <div>
          <p>Price</p>
          <input
            onChange={(e) => setNewData({ ...newData, price: e.target.value })}
            value={newData.price}
            type="number"
          />
        </div>
        <div>
          <p>Stock</p>
          <input
            onChange={(e) => setNewData({ ...newData, stock: e.target.value })}
            value={newData.stock}
            type="number"
          />
        </div>
        <div>
          <p>SKU</p>
          <input
            onChange={(e) => setNewData({ ...newData, sku: e.target.value })}
          />
        </div>
        <div>
          <p>Supplier</p>
          <input
            onChange={(e) =>
              setNewData({ ...newData, supplier: e.target.value })
            }
          />
        </div>
        <div>
          <p>Image URL</p>
          <input
            onChange={(e) =>
              setNewData({ ...newData, imageUrl: e.target.value })
            }
          />
        </div>
        <div>
          <p>Delivered</p>
          <input
            onChange={(e) =>
              setNewData({ ...newData, delivered: e.target.value })
            }
            value={newData.delivered}
            type="number"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "new", payload: newData });
            alert("Product Added,Check on Products Page.");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
