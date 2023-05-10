import Form from "../Form/Form";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import calculator from "../../images/calculator.jpg";
import "./calculation.css";

const Calculation = () => {
  const [arrayBudgetSheet, setArrayBudgetSheet] = useState([]);

  return (
    <div className="container-calculation">
      <Form className setArrayBudgetSheet={setArrayBudgetSheet} />
      <div className="search">
        <Search
          arrayBudgetSheet={arrayBudgetSheet}
          setArrayBudgetSheet={setArrayBudgetSheet}
        />
        <NavLink className="link-introduction" to="/introduction">Go to introduction</NavLink>
        <img className="calculator-image" src={calculator} alt="calculator" />
      </div>
    </div>
  );
};

export default Calculation;
