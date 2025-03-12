import React, { useState } from "react";

const Register = ({onRouteChange, loadUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        })
            .then(response => response.json())
            .then(data => {
                if(data.id){
                    loadUser(data.id, data.email);
                    onRouteChange('home');
                } else {
                    alert(data);
                }
            })
    }

    return(
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Register your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={onEmailChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={onNameChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            onChange={onPasswordChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={onSubmitRegister}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </div>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already a member?{' '}
                    <a href="#" onClick={()=>{onRouteChange('login')}} className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Log in
                    </a>
                </p>
                </div>
            </div>
        </>
    );
}

export default Register;