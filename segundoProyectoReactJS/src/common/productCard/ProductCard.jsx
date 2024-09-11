import "./productcard.css";

export const ProductCard = (props) => {
  // los parámetros de la función son un objeto de propiedades
  // pueden desestructurarse también de la siguiente manera
  //  export const ProductCard = (marca, precio}) => {

  const { marca, precio } = props;
  return (
    <div className="productCard">
      <h2>Marca</h2>
      <h3>{marca}</h3>
      <h2>Precio</h2>
      <h3>$ {precio}</h3>
      <button>Ver detalle</button>
    </div>
  );
};
