import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/home_page/homePage.component";
import DomainSearch from "./pages/domainSearch/domainSearch.component";
import VerifyEmail from "./pages/verifyEmail/verifyEmail.component";
import EmailFinder from "./pages/emailFinder/emailFinder.component";
import SignInPage from "./pages/signInPage/singIn.component";
import SignUpPage from "./pages/signUpPage/singUp.component";
import DomainSearchDashboard from "./pages/domainSearchDashboard/domainSearchDashboard.component";

import './App.css'

function App({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/domain-search"
          render={(props) => <DomainSearch {...props} />}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/email-verifier"
          render={(props) => <VerifyEmail {...props} />}
        />
      </Switch>
      <Switch>
        <Route
          exact
          path="/email-finder"
          render={(props) => <EmailFinder {...props} />}
        />
      </Switch>
      <Switch>
      {
          !isLoggedIn ?
        <Route
          exact
          path="/users/sign-in"
          render={(props) => <SignInPage {...props} />}
        />
        :
        <Redirect to="/search"></Redirect>
      }
      </Switch>
      <Switch>
      {
          !isLoggedIn ?
        <Route
          exact
          path="/users/sign-up"
          render={(props) => <SignUpPage {...props} />}
        />
        :
        <Redirect to="/search"></Redirect>
      }
      </Switch>
      <Switch>
        {
          isLoggedIn ?
            <Route
              exact
              path="/search"
              render={(props) => <DomainSearchDashboard {...props} />}
            /> :
            <Redirect to="/users/sign-in" />
        }
      </Switch>

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} />}
        />
      </Switch>

    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App);
