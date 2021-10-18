import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home/Home';
import NotFound from './components/shared/NotFound/NotFound';
import Manubar from './components/shared/Manubar/Manubar'
import Footer from './components/shared/Footer/Footer';
import ServiceDetails from './components/Pages/ServiceDetails/ServiceDetails';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';

import Login from './components/Pages/Login/Login/Login';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Manubar></Manubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/Home">
              <Home></Home>
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/ServiceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
