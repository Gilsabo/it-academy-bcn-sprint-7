import StyledPanel from "./styledPanel";
import InfoLanguages from "../Info/InfoLanguages";
import InfoPages from "../Info/InfoPages";

const Panel = () => {
    return (
        <>
          <StyledPanel>
            <div>
              <label htmlFor="pages">Number of pages</label>
              <button type="button">-</button>
              <input
                id="pages"
                value={""}
               
                type="number"
              />
              <button type="button" >+</button>
              <InfoPages />
            </div>
            
            <div>
              <label htmlFor="languages">Number of languages</label>
              <button type="button" >-</button>
              <input value={""}  type="number" />
              <button type="button" >+</button>
              <InfoLanguages />
            </div>
          </StyledPanel>
          <div></div>
        </>
      );
}
 
export default Panel;