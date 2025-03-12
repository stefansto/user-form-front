import React from "react";
import Header from "./Header";
import Profile from "./Profile";

const Home = ({onRouteChange , loadUser, loggedUser}) => {
    return(
        <>
            <div>
                <Header onRouteChange={onRouteChange} loadUser={loadUser} />
                <Profile loggedUser={loggedUser} />
            </div>
        </>
    );
}

export default Home;