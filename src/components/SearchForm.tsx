import React from "react";
import { useForm } from "react-hook-form";

interface Inputs {
  search: string;
}
interface Props {
  getDrinkName: (str: string) => void;
}
const SearchForm: React.FC<Props> = ({ getDrinkName }) => {
  const { register, handleSubmit, reset, errors } = useForm<Inputs>();

  const onSubmit = (values: Inputs) => {
    getDrinkName(values.search);
    reset();
  };
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Drink Name"
            ref={register({ required: true })}
          />
        </label>

        <button type="submit">search</button>
        <p className="error">{errors.search && "Please enter drink name."}</p>
      </form>
    </div>
  );
};

export default SearchForm;
