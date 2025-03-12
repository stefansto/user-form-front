import { useState } from 'react';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


function App() {
  const [route, setRoute] = useState('login');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({id: '', email: ''});

  const onRouteChange = (route) => {
    if (route === 'login' || route === 'register'){
      setIsSignedIn(false);
    }
    else if (route === 'home'){
      setIsSignedIn(true);
    }
    setRoute(route);
  }

  const loadUser = (loadId, loadEmail) => {
    setUser({id: loadId, email: loadEmail});
  }

  return (
    <>
      {
        route === 'login' 
        ? <Login onRouteChange={onRouteChange} loadUser={loadUser} /> 
        : route === 'register' 
        ? <Register onRouteChange={onRouteChange} loadUser={loadUser} /> 
        : <Home onRouteChange={onRouteChange} loadUser={loadUser} loggedUser={user}/> 
      }
    </>
  )
}

export default App;