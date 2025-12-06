import { Header_Logo_URL } from "./Utils/Constant";


const HeaderComponent = () => {
    return (
        <div className="Header">
            <div className="logo-container">
                <img src={Header_Logo_URL} alt="Header Logo"/>
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>   
            </div>
        </div>
    );
}

export default HeaderComponent;