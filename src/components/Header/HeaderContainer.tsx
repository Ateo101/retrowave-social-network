import {setAuthDataAC} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {getAuthData} from "../../api/api";

type HeaderContainerPropsType = {
    setAuthDataAC: (data: { id: number, login: string, email: string }) => void
    isAuth: boolean,
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    constructor(props: HeaderContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        //axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        //    {withCredentials: true})

        getAuthData().then(data => {
                data.resultCode === 0 && this.props.setAuthDataAC(data.data)
        })
    }

    render() {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        </>
    }
}

type mapStateToPropsType = {
    isAuth: boolean,
    login: string | null
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.data.login
    }
}

export default connect(mapStateToProps, {setAuthDataAC})(HeaderContainer)