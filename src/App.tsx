import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {ActionsType, stateType, storeType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

type AppPropsType={
    state: stateType
    dispatch: (action: ActionsType) => void
    store: storeType
}

function App() {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
            </div>
    );
}

export default App;
