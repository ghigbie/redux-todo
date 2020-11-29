import React from 'react'
import {connect} from 'react-redux';
import { deleteTodo } from '../../actions';


const List = (props) => {
    return (
        <div>
            <div>List</div>
            <ul>
            {   props.todos ?
                props.todos.map((todo) => (
                    <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>))
                :
                (<div>Nothing to see here</div>)
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data
})
export default connect(mapStateToProps)(List);
