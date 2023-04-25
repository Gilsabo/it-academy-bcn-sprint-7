import { useEffect } from "react";
import { useState } from "react";

const Search = ({ arrayBudgetSheet, setArrayBudgetSheet }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleAphabeticOrder = () => {
    const sortAlphabeticOrder = [...arrayBudgetSheet].sort((a, b) =>
      a.budgetname.localeCompare(b.budgetname, { sensitivity: "base" })
    );
    console.log(arrayBudgetSheet);
    setArrayBudgetSheet(sortAlphabeticOrder);
  };

  const handleDateOrder = () => {
    const sortArrayOrder = [...arrayBudgetSheet].sort(
      (a, b) => a.date - b.date
    );
    console.log(arrayBudgetSheet);
    return setArrayBudgetSheet(sortArrayOrder);
  };

  const handleSearchBar = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  useEffect(()=>{

    localStorage.setItem('budgetSheet', JSON.stringify(arrayBudgetSheet))

  },[arrayBudgetSheet])

  useEffect(()=>{
     JSON.parse(localStorage.getItem('budgetSheet'))

  },[])




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
                <div className="date">{budget.date.toLocaleDateString()}</div>
              </div>
            </div>
          ))}
        {!isEmpty &&
          arrayBudgetSheet
            .filter((budget) => budget.budgetname.includes(searchValue))
            .map((budget, index) => (
              <div className="sheet-container">
                <div key={index} className="user-sheet">
                  <div>{budget.user}</div>
                  <div>{budget.budgetname}</div>
                  <div className="date">{budget.date.toLocaleDateString()}</div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Search;
