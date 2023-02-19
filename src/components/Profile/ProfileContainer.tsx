import React from "react";
import Profile from "./Profile";
import {
    addPostThunkCreator, setUserProfileThunkCreator, setUserStatusThunkCreator, getUserStatusThunkCreator,
    profilePageType,
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    addPost: (text: string) => void
    setUserProfile: (userId: number) => void
    setUserStatus: (status: string) => void
    getUserStatus: (userId: number) => void
}

class ProfileContainer extends React.Component<ReturnType<typeof mapStateToProps> & ProfileContainerPropsType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        // let userId = this.props.match.params.userId
        let userId = this.props.match.params.userId
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId.toString()
        }
        this.props.setUserProfile(Number(userId))
        this.props.getUserStatus(Number(userId))
    }

    addPost = (text: string) => {
        this.props.addPost(text)
    }

    setStatus = (status: string) => {
        this.props.setUserStatus(status)
    }

    render() {
        return <Profile profilePage={this.props.profilePage}
                        addPost={this.addPost}
                        setUserStatus={this.setStatus}
        />
    }
}

/*const AuthRedirectComponent = withAuthRedirect(ProfileContainer)*/

const mapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profileReducer,
        isAuth: state.authReducer.isAuth,
        authorizedUserId: state.authReducer.data.id
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addPost: addPostThunkCreator,
        setUserProfile: setUserProfileThunkCreator,
        setUserStatus: setUserStatusThunkCreator,
        getUserStatus: getUserStatusThunkCreator
    }), withRouter, withAuthRedirect
)(ProfileContainer)

/*let WithURLProfileContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    addPost: addPostThunkCreator,
    updPostText: updPostTextThunkCreator,
    setUserProfile: setUserProfileThunkCreator
})
(WithURLProfileContainer);*/


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


