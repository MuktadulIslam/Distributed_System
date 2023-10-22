import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import Login from './components/Login';
import Registration from './components/Registration';
import ProfileBody from './components/profile/ProfileBody';
import { profileService } from './services/userProfileService';

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
        if (currentPathname) profileService(currentPathname, navigate)
        return <Navigate to="/login" replace />
    }
};


function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path='/*' element={<PrivateRoute />} />
        </Routes>

    );
}

export default App;
