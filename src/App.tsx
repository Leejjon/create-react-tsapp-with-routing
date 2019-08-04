import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Menu from "./components/header";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Page1" component={Page1}/>
      </BrowserRouter>

    </div>
  );
};

export default App;
