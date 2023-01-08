import {userType} from "../../../redux/users-reducer";
import s from "../../Profile/Profile.module.css";

type UserItemType = {
    user: userType,
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
}

const UserItem = (props: UserItemType) => {

    const onClickUnfollowHandler = () => {
        props.unfollow(props.user.id)
    }
    const onClickFollowHandler = () => {
        props.follow(props.user.id)
    }

    return (
        <div>
            <div>
                <img className={s.avatarBio}
                     src={props.user.photos.small
                         ? props.user.photos.small
                         : 'https://i.ibb.co/Gc3qXtB/ava-synthwave.png'}/>
                {props.user.followed
                    ? <button onClick={onClickUnfollowHandler}>Unfollow</button>
                    : <button onClick={onClickFollowHandler}>Follow</button>
                }
            </div>
            <div>
                <div>
                    <div>
                        {props.user.name}
                    </div>
                    <div>
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