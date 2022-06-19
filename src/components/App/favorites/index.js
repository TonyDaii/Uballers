import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../store";

export default function Favorites() {
    const dispatch = useDispatch();

    // we get favorite array
    const favorite = useSelector((state) => state.groundData.favorites);

    //function we use  onclick to get data
    const handleDeleteFavorite = (item) => {
        dispatch(deleteFavorite(item));
    }

    // we map here because it's an array and we need to display all value inside the array
    const mappedJsxFavorite = favorite.map((data) => (
        <div key={data.groundId}>
            <h1>{data.groundName}</h1>
            <h2>{data.city}</h2>
            <p>{data.address}</p>
            <p>{data.groundType}</p>
            <p>{data.limit}</p>
            <p>{data.basketNumber}</p>
            <p>{data.transport}</p>
            <button type="button" onClick={() => handleDeleteFavorite(data)}>  🗑️  </button>
        </div>
    ))
    return (
        <div>
            <h1>Listes des favoris</h1>
            {mappedJsxFavorite}
            <Link to={"/"}>Retour à l'accueil</Link>
        </div>
    )
}