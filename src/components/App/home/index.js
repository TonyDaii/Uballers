//import
import './style.css';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

export default function Home() {
    // we use the an hooks from redux to get the data from the store 
    const allGround = useSelector((state) => state.favorite.allGrounds)
    // we copy all the array and display one by one with the map function 
    const mappedJsxAllground = allGround.map((data) => (
        // Imported link to go the specific routes for the view
        <Link key={data.groundId} to={`/details/${data.groundId}`}>
            <h2 >{data.groundName}</h2>
        </Link>
    ))
    return(
        <div className="lists-grounds">
            <h1>Listes des terrains</h1>
            {/*we display here the mappedJsx*/}
            <div>{mappedJsxAllground}</div>
        </div>
    )
};