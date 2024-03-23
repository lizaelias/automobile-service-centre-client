import { NavLink } from "react-router-dom";
import logo from "../../../public/assets/icons/auto.png"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";



const Navbar = () => {
 
   const {user} =useContext(AuthContext);

    const navbar =<>

     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/about'>About</NavLink></li>
     <li><NavLink to='/service'>Service</NavLink></li>
     <li><NavLink to='/blog'>Blog</NavLink></li>
     <li><NavLink to='/login'>login</NavLink></li>
    
    </>

    return (
                <div>
                    <div className="navbar bg-slate-300">
                     <div className="navbar-start">
                       <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </div>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           
                            {
                                navbar
                            }
                         </ul>
                       </div>
                       <img className="w-32" src={logo} alt="" />
                     </div>
                     <div className="navbar-center hidden lg:flex">
                       <ul className="menu menu-horizontal px-1">
                            {
                                navbar
                            }
                       </ul>
                     </div>
                     <div className="navbar-end">
                        {
                          user && <p className="text-blue-900 text-xl font-bold mr-5">{user.email}</p>
                          
                        }

                    
                       <button className="btn btn-outline btn-secondary">Appointment</button>
                       
                     </div>
                   </div>
         </div>
    );
};

export default Navbar;