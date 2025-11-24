import React from "react";
import ReactDOM from "react-dom/client";

// JSX element creation this will be transpiled to React.createElement by babel under the hood
// then converted to js object and then rendered to the DOM by ReactDOM library

const jsxElement = (
  <div>
    <h1 className="heading">Hello World from Jsx</h1>
  </div>
);

// Functional Component
const Title = () => {
    return (
        <h1 className="title">Hello from Title Component</h1>
    );
}

const HeaderComponent = () => {
    return (
        <div>
            {/* Using the Title component inside another component this is called component composition  */}
            <Title />
             {/* Using the JSX element created above inside the component */}
            {jsxElement} 
            
            <h2>This is a header component</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);