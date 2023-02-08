import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUsersThunkCreator, followThunkCreator, unfollowThunkCreator,
    userPageType,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import s from './users.module.css'
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type UsersPropsType = {
    usersPage: userPageType
    isAuth: boolean
    getUsers: (currPage: number, pageSize: number) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currPage, this.props.usersPage.pageSize)
    }

    onClickSetPage = (currPage: number) => {
        this.props.getUsers(currPage, this.props.usersPage.pageSize)
    }

    followUser = (id: number) => {
        this.props.followUser(id)
    }

    unfollowUser = (id: number) => {
        this.props.unfollowUser(id)
    }

    render() {
        return <div className={s.users}>
            {/*{this.props.usersPage.isFetched && <Preloader/>}*/}
            <Users usersPage={this.props.usersPage}
                   onClickSetPage={this.onClickSetPage}
                   followUser={this.followUser}
                   unfollowUser={this.unfollowUser}
            />
        </div>
    }
}

type mapStateToPropsType = {
    usersPage: userPageType,
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersReducer,
        isAuth: state.authReducer.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsers: getUsersThunkCreator,
        followUser: followThunkCreator,
        unfollowUser: unfollowThunkCreator,
    }), withAuthRedirect
)(UsersContainer);

/*type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: userType[]) => void,
    setCurrPage: (currPage: number) => void,
    setFetched: (fetched: boolean) => void,
    setTotalUsers: (totalUsers: number) => void,
}*/
/*const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrPage: (currPage: number) => {
            dispatch(setCurrPageAC(currPage))
        },
        setFetched: (fetched: boolean) => {
            dispatch(setFetchedAC(fetched))
        },
        setTotalUsers: (totalUsers: number) => {
            dispatch(setTotalUsersAC(totalUsers))
        }
    }
}*/
