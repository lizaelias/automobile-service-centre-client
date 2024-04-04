import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const{user,loading} =useContext(AuthContext);
    const location =useLocation();
    

     if(loading){
        return <span className="loading loading-spinner text-error text-center"></span>
     }
      
     if(user?.email){
        return children;
     }
     
    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;