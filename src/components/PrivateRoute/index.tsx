import React, { FC, FunctionComponent } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

type Props = {
    isLogin:boolean,
    component:FunctionComponent
} & RouteProps
const PrivateRoute : FC<Props> = ({
    isLogin,
    component:Component,
    ...otherProps
})=>{
    return <Route
        {...otherProps}
        render={props=>{
            return isLogin ? <Component {...props}/> : <Redirect to="/"/>
        }}
    />
}

export default PrivateRoute