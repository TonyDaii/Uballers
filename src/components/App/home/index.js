//import
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppHeader from "../appHeader";
import { addFavorite, filteredGround } from "../../store";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  // we use the an hooks from redux to get the data from the store
  const allGround = useSelector(
    (state) => state.groundData.dataGround.allGrounds
  );

  const getFilteredGround = useSelector((state) => state.groundData.filtered);
  // function to handle on click favorite
  const handleAddToFavorite = (item) => {
    dispatch(addFavorite(item));
  };

  //function to handle on click filteredGround
  const handleFilteredGround = (item) => {
    dispatch(filteredGround(item));
  };
  // we copy all the array and display one by one with the map function
  const mappedJsxAllground = allGround.map((data) => (
    // Imported link to go the specific routes for the view
    <div key={data.groundId} className="lists">
      <Link to={`/details/${data.groundId}`}>{data.groundName}</Link>
      <div className="lists-add">
        <button type="button" className="lists-add" onClick={() => handleAddToFavorite(data)} >★</button>  
      </div>
    </div>
  ));
    // same as mappedjscAllGround
  const mappedFilteredJsxGround = getFilteredGround.map((data) => (
    <div key={data.groundId} className="lists">
      <Link to={`/details/${data.groundId}`}>{data.groundName}</Link>
      <div className="lists-add">
        <button type="button" className="lists-add" onClick={() => handleAddToFavorite(data)} >★</button>  
      </div>
    </div>
  ));

  return (
    <div className="lists-grounds">
      <h1>Listes des terrains</h1>
      <AppHeader />
      <div className="filter">
        <button type="button" onClick={() => handleFilteredGround("public")}>
          Les terrains publics
        </button>
        <button type="button" onClick={() => handleFilteredGround("private")}>
          Les terrains privés
        </button>
        <button type="button" onClick={() => handleFilteredGround("all")}>
          Tous les terrains
        </button>
      </div>
      {/*we display here the mappedJsx*/}
      {/* here it's a ternary like if and else if there something inside mappedFilteredJsxGround then display mappedFilteredJsxGround else display mappedJsxAllground*/}
      {mappedFilteredJsxGround.length
        ? mappedFilteredJsxGround
        : mappedJsxAllground}
    </div>
  );
}
