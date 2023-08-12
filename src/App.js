import { Route, Routes } from "react-router";
import "./App.css";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Department } from "./pages/department/department";
import { ProductPage } from "./pages/productPage/productPage";
import { ProductManagement } from "./pages/productManagement/productManagement";
import { Products } from "./pages/products/products";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
