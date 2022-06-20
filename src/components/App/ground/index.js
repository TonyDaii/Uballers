// import
import "./style.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppHeader from "../appHeader";

export default function GroundDetails() {
  // we use uneParams to get the url name or number
  const { slug } = useParams();
  // then i create a function with 2 arguments and inside that function i will put inside a const the result
  function findGround(grounds, searchedSlug) {
    // we'll get the data and the slug then we'll use the function find to compare if the slug is equal to the groundId data then you return the value
    const ground = grounds.find((testedGround) => {
      return testedGround.groundId === searchedSlug;
    });
    // and here we return all the value
    return ground;
  }

  // we use the function findGround here
  const oneGround = useSelector((state) =>
    findGround(state.groundData.dataGround.allGrounds, slug)
  );

  return (
    // and then we use the value we get and display to the jsx
    <div className="detail">
      <h1>Détail du terrain </h1>
      <AppHeader />
      <div className="detail-information">
      <h2>{oneGround.groundName}</h2>
      <h3>{oneGround.city}</h3>
      <p>{oneGround.address}</p>
      <p>{oneGround.groundType}</p>
      <p>{oneGround.limit}</p>
      <p>{oneGround.basketNumber}</p>
      <p>{oneGround.transport}</p>
      </div>
      <div className="detail-back">
        <Link to={"/"}>Retour à l'accueil</Link>
      </div>
    </div>
  );
}
