const initialState = {
    data: ['moo']
}

const todos = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data: [...state.data, {
                    id: action.id, 
                    text: action.text
                }]
            }

        case 'DELETE_TODO':
            const newData = state.data.filter((id) => id !== todos.id)
            return newData;
        
        default:
            return state;     
    }
}

export default todos;