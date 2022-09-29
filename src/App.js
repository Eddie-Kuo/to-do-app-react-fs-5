import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/auth/:sign-in" component={Auth}></Route>
        <Route path="/auth/:sign-out" component={Auth}></Route>
      </Switch>
    </div>
  );
}

export default App;
