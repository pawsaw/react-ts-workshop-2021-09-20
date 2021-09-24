import { NavLink, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import { Book } from './domain/books';
import { BookDetailScreen } from './screens/BookDetailsScreen';
import { BookScreen } from './screens/BookScreen';
import { OnBookSelected } from './screens/BookScreen/BookList';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  const history = useHistory();

  const onBookSelected: OnBookSelected = (book: Book): void => {
    history.push(`/books/${book.isbn}`);
  };

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
          <Route path="/books/:isbn">
            <BookDetailScreen />
          </Route>
          <Route path="/books">
            <BookScreen onBookSelected={onBookSelected} />
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
