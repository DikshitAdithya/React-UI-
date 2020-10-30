import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Portfellow from './Components/Portfellow';
import Paraimg from './Components/Paraimg';
import Smallcard from './Components/Smallcard';
import Pricecard from './Components/Pricecard';
import Download from './Components/Download';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import '../src/Styles.css'
import '../src/Mobile-style.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Portfellow/> */}
      <Paraimg/>
      <Smallcard/>
      <Pricecard/>
      <Download/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
