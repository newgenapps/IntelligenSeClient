import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home_page/homePage.component";
import DomainSearch from "./pages/domainSearch/domainSearch.component";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} />}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/domain-search"
          render={(props) => <DomainSearch {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
