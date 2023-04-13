import Panel from "../Panel/Panel";

const Form = () => {
  return (
    <>
      <h1>Enter you data</h1>
      <form className="form" action="">
        <h3>Personal information</h3>
        <div className="personal-information">
          <div className="name" style={{display:"block"}}>
          <label htmlFor="user-name">User's name</label>
          <input type="text" />
          </div>
          <label htmlFor="budget-name">Budget's name</label>
          <input type="text" />
        </div>
        <div className="services">
          <h3> What service would you like to hire?</h3>
          <label htmlFor="website">A website (500 €)</label>
          <input type="checkbox" id="website" name="website" value="500" />
          <Panel />
          <input type="checkbox" id="seo" name="seo" value="300" />
          <label htmlFor="seo">Seo consultant (300 €)</label>
          <input type="checkbox" id="adds" name="adds" value="200" />
          <label htmlFor="seo">Google ads campaign (200 €)</label>
        </div>
        <p name="price">Price : 0 € </p>
        <button>Show budget</button>
      </form>
    </>
  );
};

export default Form;
