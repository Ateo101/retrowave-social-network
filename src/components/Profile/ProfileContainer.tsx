import React from "react";
import {storeType} from "../../redux/store";
import Profile from "./Profile";
import StoreContext from "../../StoreContext";

export type ProfilePropsType = {
    store: storeType
}

const ProfileContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            const state = store.getState().profilePage
            const sendPost = (text: string) => {
                store.dispatch({type: 'ADD-POST', text})
                store.dispatch({type: 'UPD-POST-TEXT', text: ''});
            }
            const updPostText = (text: string) => {
                store.dispatch({type: 'UPD-POST-TEXT', text});
            }

            return <Profile state={state}
                            sendPost={sendPost}
                            updPostText={updPostText}/>

        }
        }
    </StoreContext.Consumer>
};

export default ProfileContainer;


