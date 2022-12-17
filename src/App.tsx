import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {stateType} from "./redux/store";

type AppPropsType={
    state: stateType
    dispatch: (action: any) => void
}

function App(props: AppPropsType) {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
            </div>
    );
}

export default App;
