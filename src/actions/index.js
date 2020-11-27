const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addTodo = (text) => ({
    type: ADD_TODO,
    todo: text,
});

const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id: id,
});