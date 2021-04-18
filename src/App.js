import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './Component/Header';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login';
import Register from './Component/Pages/Register';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route path="/about">
          <Header />
          <About />
        </Route>
        <Route path="/contact">
          <Header />
          <Contact />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
        <Route path="/register">
          <Header />
          <Register />
        </Route>
        <Route path="*">
          <Header />
          <h1 className="text-center">404</h1>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
