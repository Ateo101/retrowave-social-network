import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {stateType} from "./redux/state";
import React from "react";

const rerenderEntireTree = (state: stateType) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state}/>
    </BrowserRouter>, document.getElementById('root'));
}

export default rerenderEntireTree;