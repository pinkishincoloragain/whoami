import About from "views/About";
import Interest from "views/Interest";
import Developer from "views/Developer";
import NotFound from "views/NotFound";
import Landing from "views/Landing";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/interest" component={Interest} />
        <Route exact path="/developer" component={Developer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
