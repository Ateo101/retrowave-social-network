import React from "react";
import s from "../../Profile.module.css";
import {NavLink} from "react-router-dom";
import {postType} from "../../../../redux/profile-reducer";

const Post = (props: postType) => {
    return (
        <div className={s.postItem}>
            <div>
                <NavLink to='/profile'><img className={s.avatar} src={"https://i.ibb.co/Gc3qXtB/ava-synthwave.png"}/></NavLink>
            </div>
            <div>
                <b className={s.userName}>{props.userName}</b>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                <span className={s.likesCount}>{`${props.likesCount} likes`}</span>
            </div>
        </div>
    )
}

export default Post;