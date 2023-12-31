import './App.css';
import Navbar from './components/Navbar/Navbar';

import Card from './components/Card/Card';
import HeroSection from './components/HeroSection/HeroSection.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <Card />
    </div>
  );
}

export default App;
