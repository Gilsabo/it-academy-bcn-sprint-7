const Search = () => {
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

        </>
    );
}
 
export default Search;