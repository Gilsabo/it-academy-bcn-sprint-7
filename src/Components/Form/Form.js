import Panel from "../Panel/Panel";
import { useRef } from "react";
import "./Form.css";
import { formContext } from "../helper";
import useCheckboxes from "../useLocalStorage/checkboxes";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Form = ({ arrayBudgetSheet, setArrayBudgetSheet }) => {
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
        <h3>Personal information</h3>
        <div className="personal-information">
          <div className="name" style={{ display: "block" }}>
            <label htmlFor="user-name">User's name</label>
            <input type="text" ref={userRef} />
          </div>
          <label htmlFor="budget-name">Budget's name</label>
          <input type="text" ref={budgetRef} />
        </div>
        <div className="services">
          <h3> What service would you like to hire?</h3>
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
          <input
            checked={isChecked.seoPrice}
            onClick={handleCheckBoxSeo}
            type="checkbox"
            id="seoPrice"
            name="seoPrice"
            value="300"
          />
          <label htmlFor="seoPrice">Seo consultant (300 €)</label>
          <input
            checked={isChecked.adsPrice}
            onClick={handleCheckBoxAds}
            type="checkbox"
            id="adsPrice"
            name="adsPrice"
            value="200"
          />
          <label htmlFor="seoPrice">Google ads campaign (200 €)</label>
        </div>
        <p name="price">Price : {totalPrice} € </p>
        <button>Show budget</button>
      </form>
    </formContext.Provider>
  );
};

export default Form;
