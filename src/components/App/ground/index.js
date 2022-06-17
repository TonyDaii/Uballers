// import
//import 'style.css';
import { useParams } from "react-router"
import { useSelector } from "react-redux";

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
    const oneGround = useSelector((state) => findGround(state.favorite.allGrounds, slug))

    return(
        // and then we use the value we get and display to the jsx 
        <div>
           <h1>{oneGround.groundName}</h1>
           <h2>{oneGround.city}</h2>
           <p>{oneGround.address}</p>
           <p>{oneGround.groundType}</p>
           <p>{oneGround.limit}</p>
           <p>{oneGround.basketNumber}</p>
           <p>{oneGround.transport}</p>
        </div>
    )
};