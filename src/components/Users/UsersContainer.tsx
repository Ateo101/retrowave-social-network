import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrPageAC,
    setFetchedAC, setTotalUsersAC,
    setUsersAC,
    unfollowAC,
    userPageType,
    userType
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import axios from "axios";
import s from './users.module.css'

type UsersPropsType = {
    usersPage: userPageType
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: userType[]) => void,
    setCurrPage: (currPage: number) => void,
    setFetched: (fetched: boolean) => void,
    setTotalUsers: (totalUsers: number) => void,
}

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.setFetched(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setFetched(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsers(response.data.totalCount)
        });
    }

    onClickSetPage = (currPage: number) => {
        this.props.setCurrPage(currPage)
        this.props.setFetched(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setFetched(false)
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div className={s.users}>
            {/*{this.props.usersPage.isFetched && <Preloader/>}*/}
            <Users usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onClickSetPage={this.onClickSetPage}
            />
        </div>
    }
}

type mapStateToPropsType = {
    usersPage: userPageType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersReducer,
    }
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: userType[]) => void,
    setCurrPage: (currPage: number) => void,
    setFetched: (fetched: boolean) => void,
    setTotalUsers: (totalUsers: number) => void,
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);