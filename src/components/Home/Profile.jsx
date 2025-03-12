import React from "react";

const Profile = ({loggedUser}) => {
    return(
        <>
            <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                        Currently logged in as:
                    </h1>
                    <div className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        E-mail : <p className="text-base font-semibold text-indigo-600">{loggedUser.email}</p>
                    </div>
                    <div className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        id: <p className="text-base font-semibold text-indigo-600">{loggedUser.id}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;