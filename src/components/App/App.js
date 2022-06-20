// import
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import GroundDetails from "./ground";
import Favorites from "./favorites";

export default function App() {
  // imported routes and route for the diverse url to display the view
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:slug" element={<GroundDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}
