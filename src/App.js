import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
