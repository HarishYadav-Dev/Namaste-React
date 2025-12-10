import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API_URL } from "./Utils/Constant";
import Shimmer from "./Shimmer";

const getTopRatedRestaurants = (respRestaurantsList) => {
    const topRated = respRestaurantsList.filter(restaurant => restaurant.info.avgRating > 4.3);
    return topRated;
}

const getFilteredRestaurants = (searchText, respRestaurantsList) => {
    const filteredRestaurants = respRestaurantsList.filter(restaurant => 
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredRestaurants;
}

const BodyComponent = () => {
    const [respRestaurantsList, setRespRestaurantsList] = useState([]);
    const[filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
    const data = await fetch(RESTAURANT_API_URL);
    const json = await data.json();
    const list =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log("Extracted list:", list.map(r => r.info.avgRatingString));
   
    setRespRestaurantsList(Array.isArray(list) ? list : []);
    setFilteredRestaurants(Array.isArray(list) ? list : []);
    }
    return respRestaurantsList.length === 0 ? (
         <Shimmer />
    ) : (
        console.log("Body Component Rendered - Inside Return"),
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    console.log("button clicked");
                     const filtered = getFilteredRestaurants(searchText, respRestaurantsList);
                    console.log("Filtered Restaurants:", filtered);
                    setFilteredRestaurants(filtered);
                }}>Search</button>
                <button onClick={
                   () => {
                    const topRated = getTopRatedRestaurants(respRestaurantsList);
                    setFilteredRestaurants(topRated);
                   }
                }>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-list">  
                {
                    filteredRestaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                   
                }
            </div>
        </div>
    );
};

export default BodyComponent;