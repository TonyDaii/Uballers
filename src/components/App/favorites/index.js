import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../store";

export default function Favorites() {
  const dispatch = useDispatch();

  // we get favorite array
  const favorite = useSelector((state) => state.groundData.favorites);

  //function we use  onclick to get data
  const handleDeleteFavorite = (item) => {
    dispatch(deleteFavorite(item));
  };

  // we map here because it's an array and we need to display all value inside the array
  const mappedJsxFavorite = favorite.map((data) => (
    <div key={data.groundId} className="oneGround">
      <div className="oneGround-delete">
        <h2>{data.groundName}</h2>
        <div className="oneGround-button">
          <button type="button" onClick={() => handleDeleteFavorite(data)}>
            🗑️
          </button>
        </div>
      </div>
      <h3>{data.city}</h3>
      <p>{data.address}</p>
      <p>{data.groundType}</p>
      <p>{data.limit}</p>
      <p>{data.basketNumber}</p>
      <p>{data.transport}</p>
    </div>
  ));
  return (
    <div>
      <h1>Listes des favoris</h1>
      {mappedJsxFavorite}
      <div className="return">
      <Link to={"/"} >Retour à l'accueil</Link>
      </div>
    </div>
  );
}
