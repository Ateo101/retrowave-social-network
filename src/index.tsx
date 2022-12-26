import React from 'react';
import './index.css';
import store, {stateType} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "./StoreContext";

const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(()=>{
        rerenderEntireTree(store.getState())
})

//state={state} dispatch={store.dispatch.bind(store)} store={store}