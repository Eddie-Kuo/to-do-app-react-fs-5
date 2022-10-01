import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path="/auth/:type" component={Auth}></Route>
        {/* <Route path="/auth/:sign-up" component={Auth}></Route> */}
        <Route path="/todo" component={Todo}></Route>
        <Route exact path="/" component={Auth}></Route>
      </Switch>
    </div>
  );
}

export default App;
