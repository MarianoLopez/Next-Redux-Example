import {applyMiddleware, createStore} from 'redux';
import reduxLogger from 'redux-logger'
import {counterReducer} from "./reducer/CounterReducer";
import {useMemo} from "react";

let counterStore;

const initialState = {
    counter: 0
};

const initStore = (preloadedState = initialState) => {
    return createStore(
        counterReducer,
        preloadedState,
        applyMiddleware(reduxLogger)
    )
};

export const initializeStore = (preloadedState) => {
    let _store = counterStore ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && counterStore) {
        _store = initStore({
            ...counterStore.getState(),
            ...preloadedState,
        });
        // Reset the current store
        counterStore = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!counterStore) counterStore = _store;

    return _store
};

export const useStore = (initialState) =>  useMemo(() => initializeStore(initialState), [initialState]);