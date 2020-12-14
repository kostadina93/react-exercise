import { useState } from 'react';
import { withRouter } from "react-router-dom";

import { searchIcons } from '../../assets';

const MainMenuSearch = ({ history }) => {
  const [ showSearch, setShowSearch ] = useState(false);
  const [ search, setSearch ] = useState("");

  const handleHideSearch = () => {
    setShowSearch(false);
    setSearch("");
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const option = document.getElementById(search);
    if (option) {
      const link = option.attributes.url.value;
      history.push(link)
      setSearch("");
    }
  }
  return (
    <div className="MainMenuSearch">
      {
        showSearch ?
        <>
          <form className="MainMenuSearch__form" onSubmit={(e) => handleSearch(e)}>
            <input list="sections" value={search} name="section" id="section" onChange={(e) => setSearch(e.target.value)} />
            <datalist id="sections">
              <option id="Home" value="Home" url="/home" />
              <option id="All" value="All" url="/home" />
              <option id="Section 1" value="Section 1" url="/home/section1" />
              <option id="Section 2" value="Section 2" url="/home/section2" />
              <option id= "Page 2" value="Page 2" url="/page2" />
            </datalist>
            <button className="form__submit-button"><img src={searchIcons.arrowIcon} alt="arrow icon" /></button>
            <button className="form__cancel-button" type="button" onClick={() => handleHideSearch()}><img src={searchIcons.cancelIcon} alt="cancel icon" /></button>
          </form>
        </>
        :
        <button className="form__show-button" onClick={() => setShowSearch(true)}><img src={searchIcons.searchIcon} alt="search icon" /></button>
      }
    </div>
  )
}

export default withRouter(MainMenuSearch);