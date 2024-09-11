import { useState } from "react";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "navbarContainerDark" : "navbarContainer"}>
      <h3>Logo de la empresa</h3>
      <ul>
        <li>Todas</li>
        <li>Zapatillas Urbanas</li>
        <li>Zapatillas Deportivas</li>
      </ul>
      <button onClick={cambiarModo}>modo</button>
      <CartWidget />
    </div>
  );
};
