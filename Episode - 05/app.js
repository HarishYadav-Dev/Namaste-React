import React from "react";
import HeaderComponent from "./src/components/Header";
import BodyComponent from "./src/components/BodyComponent";
import ReactDOM from "react-dom/client";



const AppLayout = () => {
    return (
        <div>
            <HeaderComponent />
            <BodyComponent />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);