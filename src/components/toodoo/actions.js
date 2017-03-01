
export const ADD_TODO = 'ADD_TODO';


export function addTodo(id, name){
    return {
        type: ADD_TODO,
        id,
        name
    }
}
