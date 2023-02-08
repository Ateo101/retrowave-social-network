import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";

export function withAuthRedirect<T> (Component: ComponentType<T>) {

  const RedirectComponent = (props: { isAuth: boolean } & T) => {
    return !props.isAuth
        ? <Redirect to={'/login'}/>
        : <Component {...props}/>

  }

  return RedirectComponent
}