import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <main>
        <Hero />
        <FeatureGrid />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
