import React from "react";

interface Drinks {
  idDrink: number;
  strDrink: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  strGlass: string;
}
interface Props {
  data: Drinks[];
}
const ShowDrink: React.FC<Props> = ({ data }) => {
  return (
    <div className="ShowDrinks">
      <h2>{data.length > 0 ? "Results" : "No result were found."}</h2>
      <div className="display-flex">
        {data.map((drink: Drinks) => (
          <div key={drink.idDrink} className="drink-wrapper">
            <img src={drink.strDrinkThumb} alt="" />
            <div className="drink-info">
              <p>here: {drink.strDrink}</p>
              <p>{drink.strAlcoholic}</p>
              <p>{drink.strGlass}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDrink;
