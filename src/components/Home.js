import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import SectionsMenu from './SectionsMenu';
import ImageGallery from './ImageGallery';
import ServicesContent from './Services/Content';
import { getHomeSections } from '../services/homeServices';

const Home = () => {
  const [ title, setTitle ] = useState("");
  const [ sections, setSections ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getHomeSections().then(resp => {
      setTitle(resp[0].description)
      setSections(resp[0].sections)
      setError("")
      setLoading(false)
    }, error => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  return (
    <div className="Home">
      <h3 className="Home__header">{title}</h3>
      <SectionsMenu />
      <Switch>
        <Route exact path="/home"
          render={() => {
            return <Redirect to="/home/section1" />
          }}
        />

        <Route path="/home/:section?"
          render={() => {
            return sections.length > 0 ?
            (
              <Switch>
                <Route path="/home/section1" render={() => { return <ImageGallery data={sections[0]} /> }} />
                <Route path="/home/section2" render={() => { return <ServicesContent data={sections[1]} /> }} />
                <Route render={() => { return <Redirect to="/home/section1" /> }} />
              </Switch>
            )
            :
            (error || loading) &&
            <div style={{ textAlign: "center" }}>
              {
                error ?
                <><p>Oops, something went wrong!</p> <p>{error}</p></>
                :
                <p>Loading...</p>
              }
            </div>
          }}
        />
      </Switch>
    </div>
  )
}

export default withRouter(Home);