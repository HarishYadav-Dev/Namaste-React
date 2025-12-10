const RestaurantCard = (props) => {
const {resData} = props;
const {name} = resData.info;
 const cuisine = resData.info.cuisines;
 const url = resData.info.cloudinaryImageId;
 const resrating = resData.info.avgRating;
 const time = resData.info.sla.slaString;
 const costfortwo = resData.info.costForTwo;


    return (
        <div className="restaurant-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${url}`} alt="restaurant-logo" className="restaurant-logo"/>
            <h3>{name}</h3>
            <p>*{resrating} . {time}</p>
            <p>{cuisine.join(", ")}</p>
            <p>{costfortwo}</p>
        </div>
    );
};

export default RestaurantCard;