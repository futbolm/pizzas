
/*import './App.css';


import Navbar from './components/Nabvar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Promociones from './components/Promociones';
import Bebidas from './components/Bebidas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Menu/>
      <Promociones/>
      <Bebidas/>
      <Contacto/>
      <Footer/>

    
    </div>
  );
}

export default App;*/
import './App.css';

import Navbar from './components/Nabvar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Promociones from './components/Promociones';
import Bebidas from './components/Bebidas';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

// Paso 1: Importa CartProvider
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <CartProvider> {/* Paso 2: Envolvemos la app con CartProvider */}
      <div className="App">
        <Navbar />
        <Hero />
        <Menu />
        <Promociones />
        <Bebidas />
        <Contacto />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
