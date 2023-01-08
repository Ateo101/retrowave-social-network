import {userPageType, userType} from "../../redux/users-reducer";
import UserItem from "./UserItem/UserItem";
import axios from "axios";

type UsersPropsType = {
    usersPage: userPageType
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: userType[]) => void,
}

const Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data.items))
    }

    return (
        <div>
            {props.usersPage.users.map(u => <UserItem key={u.id}
                                                  user={u}
                                                  follow={props.follow}
                                                  unfollow={props.unfollow}
            />)}
        </div>
    )
}

export default Users;