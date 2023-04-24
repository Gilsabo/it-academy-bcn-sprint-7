const Search = (
   { arrayBudgetSheet }
) => {
  return (
    <>
      <div className="search-buttons">
        <button>Alphabetic order</button>
        <button>Date order</button>
        <button>Reset</button>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search</label>
        <input type="text" />
      </div>
      <div className="budget-sheet-box">
        <div>
          {arrayBudgetSheet &&
            arrayBudgetSheet.map((arrayBudgetSheet, index) => (
              <>
                <div key={index}>{arrayBudgetSheet.user}</div>
                <div className="date">{arrayBudgetSheet.date.toLocaleDateString()}</div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
