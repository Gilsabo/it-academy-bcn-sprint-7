import { useEffect, useState } from "react";

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
      console.log(arrayBudgetSheet);
    }
  }, []);

  return (
    <>
      <div className="search-buttons">
        <button onClick={handleAphabeticOrder}>Alphabetic order</button>
        <button onClick={handleDateOrder}>Date order</button>
        <button>Reset</button>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input onChange={handleSearchBar} type="text" />
      </div>
      <div className="budget-sheet-box">
        {isEmpty &&
          arrayBudgetSheet &&
          arrayBudgetSheet.map((budget, index) => (
            <div className="sheet-container">
              <div key={index} className="user-sheet">
                <div>{budget.user}</div>
                <div>{budget.budgetname}</div>
                <div className="date">
                  {budget.date} , {budget.hour}
                </div>
                <div className="totalprice">{budget.totalPrice} e</div>
              </div>
            </div>
          ))}
        {!isEmpty &&
          arrayBudgetSheet
            .filter((budget) => budget.budgetname.includes(searchValue))
            .map((budget, index) => (
              <div className="sheet-container" key={index}>
                <div className="user-sheet">
                  <div>{budget.user}</div>
                  <div>{budget.budgetname}</div>
                  <div className="date">
                    {budget.date} , {budget.hour}
                  </div>
                  <div className="totalprice">{budget.totalPrice} e</div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Search;
