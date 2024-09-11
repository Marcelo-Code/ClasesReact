import { ProductCard } from "../../common/productCard/ProductCard";
import "./itemListcontainer.css";
export const ItemListContainer = () => {
  return (
    <>
      <h1>Lista de productos</h1>
      <div className="productContainer">
        <ProductCard marca="nike" precio={2000} />
        <ProductCard marca="nike" precio={3000} />
        <ProductCard marca="adidas" precio={2000} />
        <ProductCard marca="puma" precio={2000} />
      </div>
    </>
  );
};
