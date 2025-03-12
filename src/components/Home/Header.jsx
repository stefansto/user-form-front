import React from "react";

const Header = ({ onRouteChange , loadUser }) => {
    return(
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div>
                        <a 
                            href="#" 
                            onClick={()=>{
                                loadUser('', '');
                                onRouteChange('login');
                            }}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" >
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;