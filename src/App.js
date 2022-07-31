import React from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import "./css/nullstyle.css";
import "./css/App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
