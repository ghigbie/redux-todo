import './App.css';
import {connect} from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

const App = (props) => (
    <div className="App">
      <AddTodo/>
      <List />
    </div>
  );


export default connect()(App);
