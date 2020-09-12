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
      <h3>is this even working??</h3>
      <div className="display-flex">
        {data.map((drink: Drinks) => (
          <div key={drink.idDrink}>
            <p>here: {drink.strDrink}</p>
            <p>{drink.strAlcoholic}</p>
            <img src={drink.strDrinkThumb} alt="" />
            <p>{drink.strGlass}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowDrink;
