import { FaGoogle } from "react-icons/fa";
import Navbar from "../../Sheard/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

import login from '../../../public/assets/images/login/login.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";






const Login = () => {

    const {signIn,googleSignIn} =useContext(AuthContext);
    const [success, setSuccess] =useState('');
    const [loginError, setLoginError] =useState('');
    const navigate =useNavigate();
      
     const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password =form.email.value;
        const user ={
            email,
            password
        }
        console.log(user);
        
        e.target.reset();

        setSuccess('');
        setLoginError('');
        navigate('/');

        // sign in
       signIn(email,password)
        .then(result =>{
            console.log(result.user)
            setSuccess('Your Accout login succesfully')
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Accout login succesfully",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(error =>{
            console.error(error)
            setLoginError('Your accout login error');
           
           Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "Your accout login Something went wrong!",
             footer: '<a href="#">Why do I have this issue?</a>'
            });

        })

     }

     const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
        })
     }

     
    return (
        <div className="max-w-7xl mx-auto mt-10 mb-24">
             <Navbar></Navbar>
 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-10 items-center p-4">
                 
                    <div className="">
                        <img src={login} alt="" />
                    
                    </div>
   
                    <div className="border rounded-lg p-20 mt-10">
                    <h1 className='text-center font-bold text-3xl mb-5'>Sign Up</h1>
                           <form onSubmit={handleLogin}>

                                  <label className="label">
                                 <span className="label-text">Email</span>
                                 </label>
                                 <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                 
                                 <label className="label">
                                 <span className="label-text">Confirm Password</span>
                                 </label>
                                 <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                                 <button className="btn btn-active btn-secondary w-full mt-4">SignIn</button>

                   
                           </form>
                            <h1 className="mt-4 text-xl font-bold text-center">Or Sign In with</h1>
                            <button onClick={handleGoogleSignIn} class="btn btn-outline btn-secondary w-full mt-4"><FaGoogle></FaGoogle> Google SignIn</button> 

                            <Link className="text-center" to='/register'><h1 className="mt-4">Have an account? <span className="text-[#FF3811] font-bold underline">Sign In</span></h1> </Link>

                            {
                                success && <p className="text-xl font-bold text-green-900 mt-4 text-center">{success}</p>
                            }
                            {
                                loginError &&  <p className="text-xl font-bold text-red-900 mt-4 text-center">{loginError}</p>
                            }
                    </div>                  
                                    
             </div>
             
        </div>                
    );
};

export default Login;