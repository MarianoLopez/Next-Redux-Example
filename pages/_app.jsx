import { Provider } from 'react-redux'
import { useStore } from '../store'
import React from "react";

export default function App({ Component, pageProps }) {
    let {initialReduxState} = pageProps;
    const store = useStore(initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}