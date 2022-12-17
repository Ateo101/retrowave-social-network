import React, {RefObject} from "react";
import s from "../Profile.module.css";
import Post from "./Post/Post";
import {postType} from "../../../redux/store";

type MyPostsPropsType = {
    postsData: postType[],
    dispatch: (action: any) => void,
    newPostText: string,
}

const MyPosts: React.FC<MyPostsPropsType> = ({postsData,newPostText,dispatch}) => {

    const myPostsElements = postsData.map( p => <Post id={p.id} userName={p.userName} message={p.message} likesCount={p.likesCount}/> )

    const NewPostElement:RefObject<HTMLTextAreaElement> = React.createRef()
    const sendPost = () => {
        let text = NewPostElement.current?.value
        let action = {type: 'ADD-POST', text}
        text && dispatch(action)
        /*text && addPost(text)*/
    }
    const onChangeHandler = () => {
        let text = NewPostElement.current?.value
        let action = {type: 'UPD-POST-TEXT', text}
        dispatch(action);
    }

    return (
        <div>
            <h2 className={s.h2Posts}>My profile</h2>
            <div className={s.newPostInputArea}>
                <textarea ref={NewPostElement}
                          placeholder={'Type your amazing message here...'}
                          value={newPostText}
                          onChange={onChangeHandler}
                />
                <div>
                    <button title={'Send post'} onClick={sendPost}>Send</button>
                    <button title={'Clear text'}>Clear</button>
                </div>
            </div>
            <div className={s.postsList}>
                {myPostsElements}
            </div>
        </div>
    )
}

export default MyPosts;