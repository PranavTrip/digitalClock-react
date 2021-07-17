import React from "react";
// import ReactDOM from "react-dom";
import Card from "./Cards";
import Data from "./Data";
// import "./index.css";

const App = () => (
  <>
    <h1>Top 5 Indian Netflix Shows</h1>
    {Data.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          name={val.name}
          title={val.title}
          link={val.link}
        />
      );
    })}
    ;
  </>
);

export default App;
