import Panel from "../Panel/Panel";
import { useRef } from "react";
import "./Form.css";
import { formContext } from "../helper";
import useCheckboxes from "../useLocalStorage/checkboxes";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Form = ({ setArrayBudgetSheet }) => {
  const {
    handleCheckBoxAds,
    handleCheckBoxSeo,
    handleCheckBoxWebsite,
    arrayState,
    isChecked,
    isClicked,
    numberOfPages,
    totalPrice,
    setNumberOfLanguages,
    setNumberOfPages,
    numberOfLanguages,
  } = useCheckboxes();

  const onSubmit = (e) => {
    e.preventDefault();
    setArrayBudgetSheet((oldArrayBudgetSheet) => [
      ...oldArrayBudgetSheet,
      {
        user: userRef.current.value,
        budgetname: budgetRef.current.value,
        date: new Date().toLocaleDateString(),
        hour: new Date().toLocaleTimeString(),
        numberOfLanguages: numberOfLanguages,
        numberOfPages: numberOfPages,
        websitePrice: isChecked.websitePrice,
        seoPrice: isChecked.seoPrice,
        adsPrice: isChecked.adsPrice,
        totalPrice: totalPrice,
      },
    ]);

    console.log(arrayState);
  };
  const userRef = useRef();
  const budgetRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      languages: numberOfLanguages,
      pages: numberOfPages,
      websitePrice: isChecked.websitePrice,
      seoPrice: isChecked.seoPrice,
      adsPrice: isChecked.adsPrice,
    });
  }, [
    numberOfLanguages,
    setSearchParams,
    searchParams,
    numberOfPages,
    isChecked,
  ]);

  return (
    <formContext.Provider
      value={{
        numberOfPages,
        setNumberOfPages,
        numberOfLanguages,
        setNumberOfLanguages,
      }}
    >
      <form className="form" action="" onSubmit={onSubmit}>
        <h2>Personal information</h2>
        <div className="personal-information">
          <div className="name" style={{ display: "block" }}>
            <label htmlFor="user-name">User's name</label>
            <input type="text" ref={userRef} />
          </div>
          <div className="budget">
            <label htmlFor="budget-name">Budget's name</label>
            <input type="text" ref={budgetRef} />
          </div>
        </div>
        <div className="services">
          <h2> What service would you like to hire?</h2>
          <div className="website-box">
            <input
              checked={isChecked.websitePrice}
              onClick={handleCheckBoxWebsite}
              type="checkbox"
              id="websitePrice"
              name="websitePrice"
              value="500"
            />
            <label htmlFor="websitePrice">A website (500 €)</label>
            <div className={isClicked ? "modal-displayed" : "modal-hidden"}>
              <Panel />
            </div>
          </div>
          <div className="seo-box">
            <input
              checked={isChecked.seoPrice}
              onClick={handleCheckBoxSeo}
              type="checkbox"
              id="seoPrice"
              name="seoPrice"
              value="300"
            />
            <label htmlFor="seoPrice">Seo consultant (300 €)</label>
          </div>
          <div className="ads-box">
            <input
              checked={isChecked.adsPrice}
              onClick={handleCheckBoxAds}
              type="checkbox"
              id="adsPrice"
              name="adsPrice"
              value="200"
            />
            <label htmlFor="adsBox">Google ads campaign (200 €)</label>
          </div>
        </div>
        <p name="price">Price : {totalPrice} € </p>
        <button  className="button-budget">Show budget</button>
      </form>
    </formContext.Provider>
  );
};

export default Form;
