import React from "react";
import {userPageType} from "../../redux/users-reducer";
import UserItem from "./UserItem/UserItem";
import s from "./users.module.css";
import Preloader from "../Preloader/Preloader";
import {API} from "../../api/api";

type UsersPropsType = {
    usersPage: userPageType
    onClickSetPage: (currPage: number) => void
    followUser: (id: number) => void
    unfollowUser: (id: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesAmount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pagination: number[] = []
    for (let i = 1; i <= pagesAmount; i++) {
        pagination.push(i)
    }

    const onClickUnfollow = (id: number) => {
        props.unfollowUser(id)
    }
    const onClickFollow = (id: number) => {
        props.followUser(id)
    }

    return (
        <div className={s.usersContent}>
            <div className={s.usersPagination}>
                {pagination.map((p, i) => <span key={i}
                                                className={p === props.usersPage.currPage ? "currPageSpan" : "pageSpan"}
                                                onClick={(e) => props.onClickSetPage(p)}>{`⠀${p}⠀`}</span>
                )}
            </div>
            <div className={s.usersList}>
                {props.usersPage.isFetched && <Preloader/>}
                {props.usersPage.users.map(u => <UserItem key={u.id}
                                                          user={u}
                                                          pendingFollow={props.usersPage.pendingFollow}
                                                          onClickFollow={onClickFollow}
                                                          onClickUnfollow={onClickUnfollow}
                />)}
            </div>
            <div className={s.usersPagination2}>
                {pagination.map((p, i) => <span key={i}
                                                className={p === props.usersPage.currPage ? "currPageSpan" : "pageSpan"}
                                                onClick={(e) => props.onClickSetPage(p)}>{`⠀${p}⠀`}</span>
                )}
            </div>
        </div>
    )
}

export default Users;