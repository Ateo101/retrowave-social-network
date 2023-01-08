import React, {RefObject} from "react";
import s from "../Profile.module.css";
import Post from "./Post/Post";
import {postType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsData: postType[],
    newPostText: string,
    addPost: (text: string) => void
    updPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({postsData,newPostText,addPost,updPostText}) => {

    const myPostsElements = postsData.map( p => <Post id={p.id} userName={p.userName} message={p.message} likesCount={p.likesCount}/> )

    const NewPostElement:RefObject<HTMLTextAreaElement> = React.createRef()
    const addPostHandler = () => {
        let text = NewPostElement.current?.value
        text && addPost(text)
        text && updPostText('')
    }
    const onChangeHandler = () => {
        let text = NewPostElement.current?.value
        text && updPostText(text)
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
                    <button title={'Send post'} onClick={addPostHandler}>Send</button>
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