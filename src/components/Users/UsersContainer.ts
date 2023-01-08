import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, userPageType, userType} from "../../redux/users-reducer";
import Users from "./Users";

type mapStateToPropsType = {
    usersPage: userPageType
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        usersPage: state.usersReducer,
    }
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: userType[]) => void,
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;