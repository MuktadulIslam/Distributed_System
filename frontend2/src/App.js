import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes, Route, Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";

import Login from './components2/Login';
import Registration from './components2/Registration';
import ProfileBody from './components2/profile/ProfileBody';
import { useEffect, useState } from 'react';
import { profileService } from './services/userProfileService';

const Protected = ({ setUser, children }) => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    const location = useLocation();
    if (isLoggedIn == 'true') {
        const currentPathname = location.pathname.split('/').pop();
        return <Navigate to="/login" replace />
    }
    else {
        const storedUserData = sessionStorage.getItem('userData');
        setUser(JSON.parse(storedUserData))
        return children
    }
}

const PrivateRoute = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const location = useLocation();
    const currentPathname = location.pathname.split('/').pop();
    const navigate = useNavigate();
    // console.log(currentPathname,isLoggedIn)
    if (isLoggedIn == 'true') {
        const storedUserData = sessionStorage.getItem('userData');
        const user = JSON.parse(storedUserData);
        if (user.username.replace(/\s/g, '').toLowerCase() != currentPathname) {
            return <Navigate to="/login" replace />
        }
        else {
            return <ProfileBody user={user} />
        }
    }
    else {
        if(currentPathname) profileService(currentPathname,navigate)
        return <Navigate to="/login" replace />
    }
};


function App() {
    // const storedUserData = sessionStorage.getItem('userData');
    // const [user, setUser] = useState(JSON.parse(storedUserData));
    const [user, setUser] = useState({ email: "bsse1215@iit.du.ac.bd", name: "Muktadul Islam" });

    return (
        <Routes>
            {/* <Route
                path="/*"
                element={
                    <Protected setUser={setUser} children={<ProfileBody user={user} />} />
                    // <Protected setUser={setUser}>
                    //     <Route path="/profile" component={ProfileBody} />
                    // </Protected>
                }
            /> */}
            {/* <Route path='/*' element={<RouteProtector />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path='/*' element={<PrivateRoute />} >
                {/* <Route path="/profile" element={<ProfileBody user={user} />} /> */}
            </Route>
        </Routes>

    );
}

export default App;
