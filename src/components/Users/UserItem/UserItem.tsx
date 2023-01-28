import {userType} from "../../../redux/users-reducer";
import s from "../../Profile/Profile.module.css";
import u from "../users.module.css"
import {NavLink} from "react-router-dom";

type UserItemType = {
    user: userType
    pendingFollow: boolean
    onClickUnfollow: (id: number) => void
    onClickFollow: (id: number) => void
}

const UserItem = (props: UserItemType) => {

    const onClickUnfollowHandler = (id: number) => () => {
        props.onClickUnfollow(id)
    }
    const onClickFollowHandler = (id: number) => () => {
        props.onClickFollow(id)
    }

    return (
        <div className={u.userItem}>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                    <img className={s.avatarBio}
                         src={props.user.photos.small
                             ? props.user.photos.small
                             : 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png'}/>
                </NavLink>
                {props.user.followed
                    ? <button onClick={onClickUnfollowHandler(props.user.id)} disabled={props.pendingFollow}>Unfollow</button>
                    : <button onClick={onClickFollowHandler(props.user.id)} disabled={props.pendingFollow}>Follow</button>
                }
            </div>
            <div>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <div className={u.status}>
                            {props.user.name}
                        </div>
                    </NavLink>
                    <div className={u.status}>
                        {props.user.status}
                    </div>
                </div>
                <div>
                    {/*{`${props.user.location.country}, ${props.user.location.city}`}*/}
                </div>
            </div>
        </div>
    )
}

export default UserItem;