import starColor from "../../assets/images/star-rate.svg";
import starWhite from "../../assets/images/emptyStar.svg";
import JSON from "../../JSON/Logement.json";
import { useParams, Navigate } from "react-router-dom";
import './rate.css'

function Rate () {
    const urlParams = useParams();
    const locationData = JSON.filter((data) => data.id === urlParams.id);
    if (locationData === []) {
        return <Navigate to="*" />;
    }
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="staring">
        {locationData.map((star, index) =>
            stars.map((stars) =>
                star.rating <= stars - 1 ? (
                    <img src={starWhite} alt="empty-star" key={`${index}-${stars}`} className="star"/>
                    ) : (
                    <img src={starColor} alt="full-star" key={`${index}-${stars}`} className="star"/>
                )
            )
        )}
        </div>
    )
}

export default Rate;