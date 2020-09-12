import React, { useState, useEffect } from "react";
import ShowDrinks from "./ShowDrinks";
import axios from "axios";

const MainApp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
      .then((res) => {
        console.log("here ", res.data.drinks);
        setData(res.data.drinks);
      });
  }, []);
  return (
    <div>
      <h3>hi</h3>
      <ShowDrinks data={data} />
    </div>
  );
};

export default MainApp;
