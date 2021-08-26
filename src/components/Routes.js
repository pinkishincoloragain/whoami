import About from "views/About";
import Interest from "views/Interest";
import Developer from "views/Developer";
import NotFound from "views/NotFound";
import Landing from "views/Landing";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/interest" render={() => <Interest />} />
      <Route exact path="/developer" render={() => <Developer />} />
      <Route component={NotFound} />
    </Router>
  );
}

export default Routes;
