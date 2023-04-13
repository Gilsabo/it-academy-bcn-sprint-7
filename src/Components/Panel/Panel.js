import { StyledPanel, Pages } from "./styledPanel";
import InfoLanguages from "../Info/InfoLanguages";
import InfoPages from "../Info/InfoPages";

const Panel = () => {
  return (
    <>
      <StyledPanel>
        <Pages>
          <label htmlFor="pages">Number of pages</label>
          <button type="button">-</button>
          <input id="pages" value={""} type="number" />

          <button type="button">+</button>
          <InfoPages />
        </Pages>

        <Pages>
          <label htmlFor="languages">Number of languages</label>
          <button type="button">-</button>
          <input value={""} type="number" />
          <button type="button">+</button>
          <InfoLanguages />
        </Pages>
      </StyledPanel>
      <div></div>
    </>
  );
};

export default Panel;
