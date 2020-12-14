import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import MainMenuContent from './MainMenu/Content';
import SliderContent from './Slider/Content';
import Home from './Home';
import Page from './Page';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Router id="main-router">
        <MainMenuContent />
        <SliderContent />
        <Switch>
          <Route
            exact
            path="/"
            render={() => { return <Redirect to="/home" /> }}
          />
          <Route exact path="/home/:section?" component={Home} />
          <Route exact path="/page2" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;