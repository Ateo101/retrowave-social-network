import React from "react";
import s from "../../Profile.module.css";
import {NavLink} from "react-router-dom";
import {postType} from "../../../../redux/profile-reducer";

const Post = (props: postType) => {
    return (
        <div className={s.postItem}>
            <div>
                <NavLink to={`/profile/${props.id}`}><img className={s.avatar} src={props.avatar}/></NavLink>
            </div>
            <div>
                <b className={s.userName}>{props.userName}</b>
            </div>
            <p>
                {props.message}
            </p>
            <div>
                <span className={s.likesCount}>{`${props.likesCount} likes`}</span>
            </div>
        </div>
    )
}

export default Post;