import React from "react";
import './App.css';
import HelloWord from "./Components/HelloWord";
import CounterExample from "./Components/CounterExample";
import Header from "./Components/Header";
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About"; 
import Contact from "./Views/Contact"; 
import Product from './Views/Product'
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="fondo-pagina">
      <Router>
      <Header />
        <Routes>
          <Route path="/about" element={
            <>
              <About/>
            </>
          } />
          <Route path="/" element={
            <>
              <Home/>
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contact/>
            </>
          } />
          <Route path="/products/:id" element={
            <>
              <Product/>
            </>
          } />
        </Routes>

         <Footer />
      </Router>
    </div>
  );
}

export default App;