
import './App.css';
import Home from './pages/index';
import Signin from './pages/signin';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
function App() {
  return (
    <Router >
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/signin" component={Signin} exact/>

      </Switch>
    </Router>
  );
}

export default App;
