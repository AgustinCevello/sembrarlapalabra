import Navbar from './components/Header/Navbar';
import Hero from './components/Hero/Hero';
import Inclusion from './components/sections/Inclusion';
import NinosAdolescentes from './components/sections/NinosAdolescentes';
import Jovenes from './components/sections/Jovenes';
import LibrosSugeridos from './components/sections/LibrosSugeridos';
import Talleres from './components/sections/Talleres';
import Capacitaciones from './components/sections/Capacitaciones';
import Contacto from './components/sections/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Inclusion />
        <NinosAdolescentes />
        <Jovenes />
        <LibrosSugeridos />
        <Talleres />
        <Capacitaciones />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;