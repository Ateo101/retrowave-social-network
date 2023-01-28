import {userType} from "../../../redux/users-reducer";
import s from "../../Profile/Profile.module.css";
import u from "../users.module.css"
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../../api/api";

type UserItemType = {
    user: userType,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    pendingFollow: boolean,
    setPendingFollow: (pendingFollow: boolean) => void,
}

const UserItem = (props: UserItemType) => {

    const onClickUnfollowHandler = () => {
        props.setPendingFollow(true)
        unfollowUser(props.user.id).then(data => {
            if (data.resultCode === 0) {
                props.unfollow(props.user.id)
            }
        });
        props.setPendingFollow(false)
    }
    const onClickFollowHandler = () => {
        props.setPendingFollow(true)
        followUser(props.user.id).then(data => {
            if (data.resultCode === 0) {
                props.follow(props.user.id)
            }
        });
        props.setPendingFollow(false)
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
                    ? <button onClick={onClickUnfollowHandler} disabled={props.pendingFollow === true}>Unfollow</button>
                    : <button onClick={onClickFollowHandler} disabled={props.pendingFollow === true}>Follow</button>
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