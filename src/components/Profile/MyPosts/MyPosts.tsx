import React from "react";
import s from "../Profile.module.css";
import Post from "./Post/Post";
import {postType, profilePageType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../util/validators/validators";
import {FormAreas} from "../../common/FormAreas/FormAreas";

type MyPostsPropsType = {
    avatar: string
    posts: postType[],
    profilePage: profilePageType
    addPost: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({
                                                 posts,
                                                 profilePage,
                                                 addPost,
                                                 avatar
                                             }) => {

    let userName = profilePage.profileInfo.userName
    let id = profilePage.profileInfo.userId

    const myPostsElements = posts.map((p, i) => <Post key={i}
                                                      id={id} avatar={avatar} userName={userName} message={p.message}
                                                      likesCount={p.likesCount}/>)

    const onSubmit = (formData: ProfileFormDataType) => {
        console.log(formData)
        formData.sendPostForm && addPost(formData.sendPostForm)
    }

    return (
        <div>
            <h2 className={s.h2Posts}>My profile</h2>
            <div className={s.newPostInputArea}>
                <ReduxProfileForm onSubmit={onSubmit}/>
            </div>
            <div className={s.postsList}>
                {myPostsElements}
            </div>
        </div>
    )
}

type ProfileFormDataType = { sendPostForm: string }

export const maxLength300 = maxLengthCreator(300)

const ProfileForm = (props: InjectedFormProps<ProfileFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormAreas}
                       placeholder={'Type your amazing message here...'}
                       name={'sendPostForm'}
                       validate={[required, maxLength300]}/>
            </div>
            <button>Send</button>
        </form>
    )
}

const ReduxProfileForm = reduxForm<ProfileFormDataType>({form: 'profileForm'})(ProfileForm)

export default MyPosts;