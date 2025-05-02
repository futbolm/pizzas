/*import React, { useState } from 'react';


const categories = ['pizzas', 'entradas', 'postres'];

const menuData = {
  pizzas: [
    {
      name: 'Margherita Black',
      description:
        'Salsa de tomate San Marzano, mozzarella di bufala, albahaca fresca y aceite de trufa negra.',
      price: 24.99,
      image: './img/photo-1513104890138-7c749659a591.jpeg',
    },
    {
      name: 'Trufa & Hongos',
      description:
        'Mezcla de hongos silvestres, queso fontina, salsa cremosa de trufa y rúcula fresca.',
      price: 28.99,
      image: './img/Trufa & Hongos.jpeg',
    },
    {
      name: 'Prosciutto di Parma',
      description:
        'Prosciutto di Parma DOP, mozzarella fior di latte, tomates cherry y reducción balsámica.',
      price: 26.99,
      image: './img/Prosciutto di Parma.jpeg',
    },
  ],
  entradas: [
    {
      name: 'Bruschetta Royal',
      description:
        'Pan rústico tostado con tomates heirloom, albahaca fresca, ajo y aceite de oliva virgen extra.',
      price: 12.99,
      image: './img/royal.jpeg',
    },
    {
      name: 'Carpaccio de Res Wagyu',
      description:
        'Finas láminas de res Wagyu con rúcula, parmesano reggiano y alcaparras.',
      price: 18.99,
      image: './img/res.jpeg',
    },
    {
      name: 'Arancini de Trufa',
      description:
        'Bolitas de risotto crocantes rellenas de mozzarella y trufa negra, acompañadas de salsa pomodoro.',
      price: 14.99,
      image: './img/trufa.jpeg',
    },
  ],
  postres: [
    {
      name: 'Tiramisú Clásico',
      description:
        'Elaborado con mascarpone italiano, café espresso y cacao en polvo.',
      price: 9.99,
      image: './img/Tiramisú Clásico.jpeg',
    },
    {
      name: 'Cannoli Siciliani',
      description:
        'Conchas crujientes rellenas de ricotta dulce con chips de chocolate y pistachos.',
      price: 8.99,
      image: './img/Cannoli Siciliani.jpeg',
    },
    {
      name: 'Panna Cotta',
      description:
        'Crema italiana con vainilla de Madagascar, acompañada de coulis de frutos rojos.',
      price: 10.99,
      image: './img/cotta.jpeg',
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2 className="section-title">Nuestro Menú Premium</h2>

        <div className="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuData[activeCategory].map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">${item.price.toFixed(2)}</span>
              <button className="add-to-cart">Añadir</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
*/

import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importa el hook del carrito

const categories = ['pizzas', 'entradas', 'postres'];

const menuData = {
  pizzas: [
    {
      name: 'Margherita Black',
      description:
        'Salsa de tomate San Marzano, mozzarella di bufala, albahaca fresca y aceite de trufa negra.',
      price: 24.99,
      image: './img/photo-1513104890138-7c749659a591.jpeg',
    },
    {
      name: 'Trufa & Hongos',
      description:
        'Mezcla de hongos silvestres, queso fontina, salsa cremosa de trufa y rúcula fresca.',
      price: 28.99,
      image: './img/Trufa & Hongos.jpeg',
    },
    {
      name: 'Prosciutto di Parma',
      description:
        'Prosciutto di Parma DOP, mozzarella fior di latte, tomates cherry y reducción balsámica.',
      price: 26.99,
      image: './img/Prosciutto di Parma.jpeg',
    },
  ],
  entradas: [
    {
      name: 'Bruschetta Royal',
      description:
        'Pan rústico tostado con tomates heirloom, albahaca fresca, ajo y aceite de oliva virgen extra.',
      price: 12.99,
      image: './img/royal.jpeg',
    },
    {
      name: 'Carpaccio de Res Wagyu',
      description:
        'Finas láminas de res Wagyu con rúcula, parmesano reggiano y alcaparras.',
      price: 18.99,
      image: './img/res.jpeg',
    },
    {
      name: 'Arancini de Trufa',
      description:
        'Bolitas de risotto crocantes rellenas de mozzarella y trufa negra, acompañadas de salsa pomodoro.',
      price: 14.99,
      image: './img/trufa.jpeg',
    },
  ],
  postres: [
    {
      name: 'Tiramisú Clásico',
      description:
        'Elaborado con mascarpone italiano, café espresso y cacao en polvo.',
      price: 9.99,
      image: './img/Tiramisú Clásico.jpeg',
    },
    {
      name: 'Cannoli Siciliani',
      description:
        'Conchas crujientes rellenas de ricotta dulce con chips de chocolate y pistachos.',
      price: 8.99,
      image: './img/Cannoli Siciliani.jpeg',
    },
    {
      name: 'Panna Cotta',
      description:
        'Crema italiana con vainilla de Madagascar, acompañada de coulis de frutos rojos.',
      price: 10.99,
      image: './img/cotta.jpeg',
    },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const { addToCart } = useCart(); // Usamos el hook del carrito para acceder a la función addToCart

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2 className="section-title">Nuestro Menú Premium</h2>

        <div className="menu-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuData[activeCategory].map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">${item.price.toFixed(2)}</span>
              <button 
                className="add-to-cart" 
                onClick={() => addToCart(item)} // Añadir al carrito
              >
                Añadir
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
