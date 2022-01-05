import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <div className="Inner-App-body">
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
