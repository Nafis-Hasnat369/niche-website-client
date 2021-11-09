import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/home">

          </Route>
          <Route path="*">

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
