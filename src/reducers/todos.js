const initialState = {
    data: []
}

const todos = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data: [...state.data, {id: Math.random(), text: action.text}]
            }

        case 'DELETE_TODO':
            const newData = state.data.filter((id) => id !== todos.id)
            return{
                ...state,
                
            }
        
        default:
            return state;     
    }
}

export default todos;