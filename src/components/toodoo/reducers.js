
import { ADD_TODO } from './actions';

const initialState = {
    todos: [
        {
        id: 1,
        name: 'Item 1'
        }
    ],
    error: ''
};

function homeReducer(state = initialState, action ) {
    switch (action.type) {
        case ADD_TODO:
            return state;
        default: 
            return state;
    }
}

const HomeReducer = {
    guarantees: homeReducer
};

export default HomeReducer;
