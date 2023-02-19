import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormAreas/FormAreas";
import {connect, useDispatch} from "react-redux";
import {loginTC, logoutTC} from "../../redux/auth-reducer";
import s from '../common/FormAreas/FormAreasStyles.module.css'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const Login = (props: ReturnType<typeof mapStateToProps>) => {

    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe))
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.loginPage}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'}
                       placeholder={'Login'}
                       component={Input}/>
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Password'}
                       component={Input}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={'input'}/>
                Remember me
            </div>
            {props.error && <div className={s.commonFormError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);