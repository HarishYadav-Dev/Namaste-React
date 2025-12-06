import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "./Utils/MockData";

const getTopRatedRestaurants = () => {
    const topRated = restaurantList.filter(restaurant => restaurant.info.rating.aggregate_rating > 4);
    return topRated;
}

const BodyComponent = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search"/>
                <button>Search</button>
                <button onClick={
                   () => {
                    setRestaurants(getTopRatedRestaurants());
                   }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.info.resId} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
};

export default BodyComponent;