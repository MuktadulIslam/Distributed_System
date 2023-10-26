import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import Login from './components/Login';
import Registration from './components/Registration';
import ProfileBody from './components/profile/ProfileBody';
import { profileService } from './services/userProfileService';
import { useState } from 'react';

const PrivateRoute = (props) => {
    const location = useLocation();
    const user = props.user;
    const currentPathname = location.pathname.split('/').pop();
    const navigate = useNavigate();

    if(user) {
        return <ProfileBody user={user} />
    }
    else {
        profileService(currentPathname, props.setUser, navigate)
    }
};


function App() {
    const [user, setUser] = useState();
    return (
        <Routes>
            <Route path="/login" element={<Login setUser={setUser}/>} />
            <Route path="/registration" element={<Registration setUser={setUser}/>} />
            <Route path='/*' element={<PrivateRoute user={user} setUser={setUser}/>} />
        </Routes>

    );
}

export default App;
