import logo from './logo.png';
import './App.css';
import FavouriteAuthor from './components/Authors/FavouriteAuthor';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo"/>
      </header> */}
      <FavouriteAuthor/>
      <br/>
      <TodoList/>
    </div>
  );
}

export default App;
