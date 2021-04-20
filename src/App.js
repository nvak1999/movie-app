import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/:id" exact component={Details} /> */}
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
