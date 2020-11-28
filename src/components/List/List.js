import React from 'react'
import {connect} from 'react-redux';
import { deleteTodo } from '../../actions';


const List = (props) => {
    return (
        <div>
            <div>List</div>
            <ul>
            {
                props.todos.map((todo, index) => (<li key={index}>{todo.text}</li>))
            }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.data
})
export default connect(mapStateToProps)(List);
