import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer />}/>
            </div>
    );
}

export default App;
