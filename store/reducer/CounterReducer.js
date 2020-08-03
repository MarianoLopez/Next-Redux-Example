import {INCREMENT} from "../action/CounterAction";


export const counterReducer = (state, action) => {
    if (action.type === INCREMENT) {
        return incrementCounter(state);
    } else {
        return state;
    }
};

const incrementCounter = (state) => {
    return {
        ...state,
        counter: state.counter + 1
    }
};