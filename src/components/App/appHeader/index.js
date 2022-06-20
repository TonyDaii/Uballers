import "./style.css";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <div className="favorite">
      <Link to={"/favorites"} className="favorite-link">Mes favoris</Link>
    </div>
  );
}
