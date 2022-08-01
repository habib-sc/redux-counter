 import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstant";

// Performing on counter action types

const initialCounter = {count: 0}

const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }

        case RESET:
            return {
                ...state,
                count: 0
            }
    
        default:
            return state;
    }
}

export default counterReducer;