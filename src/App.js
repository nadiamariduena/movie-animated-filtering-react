import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./lib/font-awesome/css/all.min.css";
//
//
//
import Home from "./components/Home";
import { Navigation } from "./components/Navigation.jsx";

//
//

function App() {
  return (
    <Router>
      <Navigation />
      <div className="page">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/watched" exact component={Watched} /> */}
          <Route path="/*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
