import {logoutTC, setAuthDataAC, setAuthDataThunkCreator} from "../../redux/auth-reducer";
import Header from "./Header";
import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {
    setAuthData: () => void
    isAuth: boolean,
    login: string | null
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.setAuthData()
    }

    render() {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
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

export default connect(mapStateToProps, {setAuthData: setAuthDataThunkCreator, logout: logoutTC})(HeaderContainer)