import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './components/Login/Register/Register';
import Explore from './components/Explore/Explore';
import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Home/Header/Header';
import Bookings from './components/Bookings/Bookings';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Bookings />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="/addProduct">
              <AddProduct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
