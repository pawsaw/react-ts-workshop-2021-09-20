import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { BookScreen } from './screens/BookScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/playground">Playground</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/playground">
            <PlaygroundScreen />
          </Route>
          <Route path="/books">
            <BookScreen />
          </Route>
          <Redirect exact path="/" to="/books" />
          <Route>
            <span>Invalid path</span>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
