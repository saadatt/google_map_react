import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
/*import Logo from "./components/Logo";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";*/
function App() {
  return (
      <div>
        <div className='container'>
          <div className="topnav">
            <Header/>
          </div>
          <Content/>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
