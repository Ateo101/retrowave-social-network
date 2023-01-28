import React from "react";
import {userPageType} from "../../redux/users-reducer";
import UserItem from "./UserItem/UserItem";
import s from "./users.module.css";
import Preloader from "../Preloader/Preloader";

type UsersPropsType = {
    usersPage: userPageType
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    onClickSetPage: (currPage: number) => void,
    pendingFollow: boolean,
    setPendingFollow: (pendingFollow: boolean) => void,
}

const Users = (props: UsersPropsType) => {

    let pagesAmount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pagination: number[] = []
    for (let i = 1; i <= pagesAmount; i++) {
        pagination.push(i)
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
                                                          follow={props.follow}
                                                          unfollow={props.unfollow}
                                                          pendingFollow={props.pendingFollow}
                                                          setPendingFollow={props.setPendingFollow}
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