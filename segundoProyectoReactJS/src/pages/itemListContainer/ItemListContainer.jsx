import { useEffect, useState } from "react";
import { ProductCard } from "../../common/productCard/ProductCard";
import "./itemListcontainer.css";
export const ItemListContainer = () => {
  const [precioNuevo, setPrecioNuevo] = useState(2000);
  const [nombreNuevo, setNombreNuevo] = useState("pepe");

  const cambiarNombre = () => {
    if (nombreNuevo == "pepe") {
      setNombreNuevo("toto");
    } else {
      setNombreNuevo("pepe");
    }
  };

  useEffect(
    () => console.log("se hace la petición"),
    [nombreNuevo, precioNuevo]
  );

  const cambiarPrecio = () => {
    if (precioNuevo == 2000) {
      setPrecioNuevo(10000);
    } else {
      setPrecioNuevo(2000);
    }
  };
  return (
    <>
      <h1>Lista de productos</h1>
      <div className="productContainer">
        <div>{nombreNuevo}</div>
        <ProductCard marca="nike" precio={precioNuevo} />,
        <ProductCard marca="aaa" precio={precioNuevo} />,
        <ProductCard marca="bbb" precio={precioNuevo} />
      </div>
      <button onClick={cambiarPrecio}>Cambiar Precio</button>
      <button onClick={cambiarNombre}>Cambiar Nombre</button>
    </>
  );
};
