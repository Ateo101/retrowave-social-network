import React, {RefObject} from "react";
import s from "../Profile.module.css";
import Post from "./Post/Post";
import {postType, profilePageDataType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    avatar: string
    posts: postType[],
    profilePageData: profilePageDataType | null
    newPostText: string,
    addPost: (text: string) => void
    updPostText: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 profilePageData,
                                                 newPostText,
                                                 addPost, updPostText,
                                                 avatar
                                             }) => {

    let userName = posts[0].userName
    let id = profilePageData?.userId ? profilePageData.userId.toString() : '20140'

    if (profilePageData) {
        userName = profilePageData.fullName
    }

    const myPostsElements = posts.map((p, i) => <Post key={i}
                                                      id={id} avatar={avatar} userName={userName} message={p.message}
                                                      likesCount={p.likesCount}/>)

    const NewPostElement: RefObject<HTMLTextAreaElement> = React.createRef()
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