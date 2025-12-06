const RestaurantCard = (props) => {
const {resData} = props;
const {name} = resData.info;
const cuisine = resData.info.cuisine.map((c) => c.name);
const url = resData.info.o2FeaturedImage.url;
const resrating = resData.info.rating.aggregate_rating;
const costforone = resData.info.cfo.text;


    return (
        <div className="restaurant-card">
            <img src={url} alt="restaurant-logo" className="restaurant-logo"/>
            <h3>{name}</h3>
            <p>{cuisine.join(", ")}</p>
            <p>{resrating} * </p>
            <p>{costforone}</p>
        </div>
    );
};

export default RestaurantCard;