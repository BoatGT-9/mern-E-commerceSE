import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from '../../context/AuthProvider';
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const ProtectedRoute = ({children}) =>{
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to="/SignIn" state={{from:location}} replace/>
}
export default ProtectedRoute;

