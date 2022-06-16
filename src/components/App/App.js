import './App.css';

import { Route, Routes } from "react-router-dom";
import Home from './home';
import GroundDetails from './ground';

export default function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details" element={<GroundDetails/>} />
    </Routes>
    </div>
  );
}


