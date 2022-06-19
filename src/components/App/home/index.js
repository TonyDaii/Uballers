//import
import './style.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import AppHeader from '../appHeader';
import { addFavorite } from '../../store';
import { useDispatch } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();
    // we use the an hooks from redux to get the data from the store 
    const allGround = useSelector((state) => state.groundData.dataGround.allGrounds)

    // function to handle on click favorite
    const handleAddToFavorite = (item) => { 
            dispatch(addFavorite(item));
        
    }
    // we copy all the array and display one by one with the map function 
    const mappedJsxAllground = allGround.map((data) => (
        // Imported link to go the specific routes for the view
        <div key={data.groundId}>
            <Link  to={`/details/${data.groundId}`}>
               {data.groundName}
            </Link>
            <input type="button" onClick={() => handleAddToFavorite(data)}/>
        </div>
    ))


    return(
        <div className="lists-grounds">
            <AppHeader/>
            <h1>Listes des terrains</h1>
            {/*we display here the mappedJsx*/}
            {mappedJsxAllground}
        </div>
    )
};