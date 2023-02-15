import {Field, reduxForm, InjectedFormProps} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={'Login'}
                       component={'input'}/>
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Password'}
                       component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={'input'}/>
                Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default Login;