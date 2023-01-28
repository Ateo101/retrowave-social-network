import React from "react";
import Profile from "./Profile";
import {
    addPostThunkCreator, setUserProfileThunkCreator, updPostTextThunkCreator,
    profilePageType,
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    profilePage: profilePageType
    addPost: (text: string) => void
    updPostText: (text: string) => void
    setUserProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUserProfile(userId)
    }

    addPost = (text: string) => {
        this.props.addPost(text)
    }
    updPostText = (text: string) => {
        this.props.updPostText(text)
    }

    render() {
        return <Profile profilePage={this.props.profilePage}
                        addPost={this.addPost}
                        updPostText={this.updPostText}/>
    }
}

type mapStateToPropsType = {
    profilePage: profilePageType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profileReducer,
    }
}

let WithURLProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    addPost: addPostThunkCreator,
    updPostText: updPostTextThunkCreator,
    setUserProfile: setUserProfileThunkCreator
})
(WithURLProfileContainer);


/*type mapDispatchToPropsType = {
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
}*/

/*const ProfileContainer = connect(mapStateToProps, {addPost, updPostText})(Profile);*/

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


