import { useState, useEffect } from 'react';

import Tile from './Tile';
import { getPageData } from '../services/pageServices';

const Page = () => {
  const [ title, setTitle ] = useState("");
  const [ tiles, setTiles ] = useState([]);
  const [ error, setError ] = useState("");
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getPageData().then(resp => {
      setTitle(resp[0].description)
      setTiles(resp[0].tiles)
      setError("");
      setLoading(false)
    }, error => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  return (
    <div className="Page">
      {
        (error | loading) ?
        <div style={{ textAlign: "center" }}>
          {
            error ?
            <><p>Oops, something went wrong!</p> <p>{error}</p></>
            :
            <p>Loading...</p>
          }
        </div>
        :
        <>
          <h3 className="Page__title">{title}</h3>
          <div className="Page__tiles">
            {
              tiles.map(t => (
                <Tile key={t.title} data={t} />
              ))
            }
          </div>
        </>
      }
    </div>
  )
}

export default Page;