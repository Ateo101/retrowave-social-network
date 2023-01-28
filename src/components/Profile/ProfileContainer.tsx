import React from "react";
import Profile from "./Profile";
import {addPost, profilePageDataType, profilePageType, setUserProfile, updPostText} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getAuthData, getUserProfile} from "../../api/api";

type ProfileContainerPropsType = {
    setUserProfile: (profile: profilePageDataType | null) => void
    profilePage: profilePageType
    addPost: (text: string) => void
    updPostText: (text: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType & RouteComponentProps<{ userId: string }>> {

    constructor(props: ProfileContainerPropsType & RouteComponentProps<{ userId: string }>) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '20140'
        }
        getUserProfile(+userId).then(data => {
            this.props.setUserProfile(data)
        }).catch(reason => {
            console.log(reason)
        })
    }

    render() {
        return <Profile profilePage={this.props.profilePage}
                        addPost={this.props.addPost}
                        updPostText={this.props.updPostText}/>
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

export default connect(mapStateToProps, {addPost, updPostText, setUserProfile})(WithURLProfileContainer);

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


