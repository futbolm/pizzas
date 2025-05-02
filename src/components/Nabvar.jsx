/*import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
 // Asegúrate de crear este archivo con tus estilos o importar Tailwind u otro framework

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>
          Pizza<span>Premium</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#menu" onClick={closeMenu}>Menú</a>
          <a href="#promociones" onClick={closeMenu}>Promociones</a>
          <a href="#bebidas" onClick={closeMenu}>Bebidas</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a href="#" className="cart-icon" id="cartIcon" onClick={closeMenu}>
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </a>
          <a href="#" className="btn-pedido" onClick={closeMenu}>
            Hacer Pedido
          </a>
        </div>

        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/


/*import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, total, clearCart } = useCart();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleCart = () => setCartOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleCheckout = () => {
    alert('¡Gracias por su compra!');
    clearCart();
    setCartOpen(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>
          Pizza<span>Premium</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#menu" onClick={closeMenu}>Menú</a>
          <a href="#promociones" onClick={closeMenu}>Promociones</a>
          <a href="#bebidas" onClick={closeMenu}>Bebidas</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <div className="cart-icon" id="cartIcon" onClick={toggleCart}>
            <FaShoppingCart />
            <span className="cart-count">{totalItems}</span>
          </div>
          <a href="#" className="btn-pedido" onClick={closeMenu}>
            Hacer Pedido
          </a>
        </div>

        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {cartOpen && (
          <div className="cart-dropdown">
            <h3>Carrito de Compras</h3>
            {cartItems.length === 0 ? (
              <p>Tu carrito está vacío.</p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.name} x{item.quantity} - ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
                <p>Total: ${total.toFixed(2)}</p>
                <button onClick={handleCheckout}>Finalizar Compra</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;*/


/*
import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const { cartItems, total, addToCart, clearCart, setCartItems } = useCart();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleCart = () => setCartVisible(prev => !prev);

  const increase = (item) => addToCart(item);

  const decrease = (item) => {
    setCartItems(prev =>
      prev.map(i =>
        i.name === item.name
          ? { ...i, quantity: i.quantity - 1 }
          : i
      ).filter(i => i.quantity > 0)
    );
  };

  const finalizarCompra = () => {
    alert('¡Gracias por su compra!');
    clearCart();
    setCartVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>
          Pizza<span>Premium</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#menu" onClick={closeMenu}>Menú</a>
          <a href="#promociones" onClick={closeMenu}>Promociones</a>
          <a href="#bebidas" onClick={closeMenu}>Bebidas</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a href="#" className="cart-icon" id="cartIcon" onClick={toggleCart}>
            <FaShoppingCart />
            <span className="cart-count">{cartItems.length}</span>
          </a>
          <a href="#" className="btn-pedido" onClick={closeMenu}>
            Hacer Pedido
          </a>
        </div>

        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* CARRITO DE COMPRAS }
        /*{cartVisible && (
          <div className="cart-dropdown">
            <h3>Tu Carrito</h3>
            {cartItems.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <>
                <ul className="cart-list">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-img" />
                      <div className="cart-info">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                        <div className="cart-controls">
                          <button onClick={() => decrease(item)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increase(item)}>+</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="cart-total">Total: ${total.toFixed(2)}</p>
                <button className="btn-finalizar" onClick={finalizarCompra}>Finalizar Compra</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
*/

import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const { cartItems, total, addToCart, decreaseQuantity, clearCart } = useCart();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleCart = () => setCartVisible((prev) => !prev);

  const increase = (item) => addToCart(item);

  const decrease = (item) => {
    decreaseQuantity(item);  // Usamos decreaseQuantity aquí
  };

  const finalizarCompra = () => {
    alert('¡Gracias por su compra, recoga su pedido en la tienda!');
    clearCart();
    setCartVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>
          Pizza<span>Premium</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Inicio</a>
          <a href="#menu" onClick={closeMenu}>Menú</a>
          <a href="#promociones" onClick={closeMenu}>Promociones</a>
          <a href="#bebidas" onClick={closeMenu}>Bebidas</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a href="#" className="cart-icon" id="cartIcon" onClick={toggleCart}>
            <FaShoppingCart />
            <span className="cart-count">{cartItems.length}</span>
          </a>
          <a href="#" className="btn-pedido" onClick={closeMenu}>
            Hacer Pedido
          </a>
        </div>

        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* CARRITO DE COMPRAS */}
        {cartVisible && (
          <div className="cart-dropdown">
            <h3>Tu Carrito</h3>
            {cartItems.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <>
                <ul className="cart-list">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                      <img src={item.image} alt={item.name} className="cart-img" />
                      <div className="cart-info">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                        <div className="cart-controls">
                          <button onClick={() => decrease(item)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increase(item)}>+</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="cart-total">Total: ${total.toFixed(2)}</p>
                <button className="btn-finalizar" onClick={finalizarCompra}>Finalizar Compra</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
