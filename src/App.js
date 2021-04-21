import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //Block Element Modifier B.E.M. className methodology
    <Router>
      <div className="App">
        {/* component outside of switch is rended regardless */}
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* default root remains at bottom */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
