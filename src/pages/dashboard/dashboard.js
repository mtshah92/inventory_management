import { useContext } from "react";
import { InventoryContext } from "../../context/inventoryContext";

export const Dashboard = () => {
  const { state } = useContext(InventoryContext);
  const totalStock = state.data.reduce((acc, curr) => acc + curr.stock, 0);
  const totalDelivered = state.data.reduce(
    (acc, curr) => acc + curr.delivered,
    0
  );
  const lowStockItems = state.data.filter((item) => item.stock < 11).length;
  return (
    <div>
      <div className="total-stocks each-department">
        <p>{totalStock}</p>
        <h3>Total Stocks</h3>
      </div>
      <div className="total-stocks each-department">
        <p>{totalDelivered}</p>
        <h3>Total Delivered</h3>
      </div>
      <div className="total-stocks each-department">
        <p>{lowStockItems}</p>
        <h3>Low Stock Items</h3>
      </div>
    </div>
  );
};
