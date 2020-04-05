import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest}) {
    
    const isAuthenticate = JSON.parse(localStorage.getItem("tokens"));
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticate ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/login" 
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;