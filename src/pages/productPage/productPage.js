import { useContext } from "react";
import { useParams } from "react-router";
import { InventoryContext } from "../../context/inventoryContext";

export const ProductPage = () => {
  const { state } = useContext(InventoryContext);
  const { productId } = useParams();
  const data = state.data.find((item) => item.id == productId);
  const {
    department,
    name,
    description,
    price,
    stock,
    sku,
    supplier,
    delivered,
    imageUrl,
  } = data;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <img src={imageUrl} width="200" height="300" />
      </div>
      <p>Price:{price}</p>
      <p>Stock:{stock}</p>
      <p>Supplier:{supplier}</p>
      <p>Department:{department}</p>
      <p>SKU:{sku}</p>
      <p>Delivered:{delivered}</p>
      <p>Description: {description}</p>
    </div>
  );
};
