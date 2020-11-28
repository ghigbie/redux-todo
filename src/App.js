import logo from './logo.svg';
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

const mapStateToProps = (state) => {
  console.log(state);
  const mooo = state.todos.data[0];
  console.log(mooo);
  return {
    moo: state.todos.data[0]
  }
}

export default connect(mapStateToProps)(App);
