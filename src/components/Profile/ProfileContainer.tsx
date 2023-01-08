import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, profilePageType, updPostTextAC} from "../../redux/profile-reducer";

type mapStateToPropsType = {
    profilePage: profilePageType
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profilePage: state.profileReducer,
    }
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void,
    updPostText: (text: string) => void,
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))
        },
        updPostText: (text: string) => {
            dispatch(updPostTextAC(text))
        },
    }
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileContainer;

/*export type ProfilePropsType = {
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
};*/


