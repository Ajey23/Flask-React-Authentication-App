import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home/> </Route>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/register'><Register/></Route>
        <Route exact path='/Navbar'><Navbar/></Route>
        <Route exact path='/Logout'><Logout/></Route>
      </Switch>
    </div>
  );
}

export default App;
