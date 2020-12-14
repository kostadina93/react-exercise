import { useState, useEffect } from 'react';

import MenuTab from '../MenuTab';
import MainMenuSearch from './Search';
import { getMenuElements } from '../../services/menuServices';

const MainMenuContent = () => {
  const [ elements, setElements ] = useState([{ title: "Home" }]);

  useEffect(() => {
    getMenuElements().then(resp => {
      setElements(resp);
    }, error => {
      console.log(`Something went wrong! ${error.message}`)
    })
  }, [])

  return (
    <div className="MainMenuContent">
      <div className="MainMenuContent__nav">
        {
          elements.map(e => (
            <MenuTab key={e.title} linkTo={`/${e.title.toLowerCase().replace(/ /g,'')}`} title={e.title} />
          ))
        }
      </div>
      <MainMenuSearch />
    </div>
  )
}

export default MainMenuContent;