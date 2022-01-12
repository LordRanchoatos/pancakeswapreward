import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Hero from "./components/Hero";
{/*
import Section1 from './components/Section1';
import Section2 from './componennts/Section2';
import Section3 from './components/Section3'
*/}
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <div className="Inner-App-body">
          <Hero />
          {/*
          <Section1 />
          <Section2 />
          <Section3 />
          */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
