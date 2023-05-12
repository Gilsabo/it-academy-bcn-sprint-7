import { useEffect, useState } from "react";
import "./search.css";

const Search = ({ arrayBudgetSheet, setArrayBudgetSheet }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleAphabeticOrder = () => {
    const sortAlphabeticOrder = [...arrayBudgetSheet].sort((a, b) =>
      a.budgetname.localeCompare(b.budgetname, { sensitivity: "base" })
    );
    setArrayBudgetSheet(sortAlphabeticOrder);
  };

  const handleDateOrder = () => {
    const sortArrayOrder = [...arrayBudgetSheet].sort((a, b) =>
      a.hour.localeCompare(b.hour, { sensitivity: "base" })
    );
    setArrayBudgetSheet(sortArrayOrder);
  };

  const handleSearchBar = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const dataStored = JSON.parse(localStorage.getItem("stored"));

  useEffect(() => {
    const data = arrayBudgetSheet;
    localStorage.setItem("stored", JSON.stringify(data));
  }, [arrayBudgetSheet]);

  useEffect(() => {
    if (dataStored) {
      setArrayBudgetSheet(dataStored);
    }
  }, []);

  return (
    <div className="container-search">
      <h2 className="search-bar">
        <label htmlFor="search">Search</label>
        <input onChange={handleSearchBar} type="text" />
      </h2>
      <div className="search-buttons">
        <button
          className="button-alphabetic-order"
          onClick={handleAphabeticOrder}
        >
          Alphabetic order
        </button>
        <button className="button-date-order" onClick={handleDateOrder}>
          Date order
        </button>
        <button className="button-reset-order">Reset</button>
      </div>
      <div className="budget-sheet-box">
        {isEmpty &&
          arrayBudgetSheet &&
          arrayBudgetSheet.map((budget, index) => (
            <div className="sheet-container" key={index}>
              <div  className="user-sheet">
                <div>User's name : {budget.user}</div>
                <div>Budget's name : {budget.budgetname}</div>
                <div className="date">
                  Date : {budget.date} , <br /> Hour : {budget.hour}
                </div>
                <div>Website service? {budget.websitePrice ? "yes" : "no"}</div>
                <div>Seo service? {budget.seoPrice ? "yes" : "no"}</div>
                <div>Google ads service? {budget.adsPrice ? "yes" : "no"}</div>
                <div className="">
                  Number of Languages : {budget.numberOfLanguages}
                </div>
                <div className="">
                  Number of pages : {budget.numberOfPages}
                </div>
                <div className="totalprice">
                  Total price : {budget.totalPrice} euros
                </div>
              </div>
            </div>
          ))}
        {!isEmpty &&
          arrayBudgetSheet
            .filter((budget) => budget.budgetname.includes(searchValue))
            .map((budget, index) => (
              <div key={index} className="user-sheet">
                <div>User's name : {budget.user}</div>
                <div>Budget's name : {budget.budgetname}</div>
                <div className="date">
                  Date : {budget.date} , <br /> Hour : {budget.hour}
                </div>
                <div>Website service? {budget.websitePrice ? "yes" : "no"}</div>
                <div>Seo service? {budget.seoPrice ? "yes" : "no"}</div>
                <div>Google ads service? {budget.adsPrice ? "yes" : "no"}</div>
                <div className="">
                  Number of Languages : {budget.numberOfLanguages}
                </div>
                <div className="">
                  Number of pages : {budget.numberOfPages}
                </div>
                <div className="totalprice">
                  Total price : {budget.totalPrice} euros
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Search;
