

import React from 'react';
import Navbar from '../../Sheard/Navbar/Navbar';
import register from '../../../public/assets/images/login/login.svg'
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
       
     const handleRegister = e =>{
        e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.email.value;

        const user ={
            name,email,password
        }

        console.log(user)
     }



    return (
        <div>

<div className="max-w-7xl mx-auto mt-10 mb-24">
             <Navbar></Navbar>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  mt-10 items-center p-4">
                    <div className="">
                        <img src={register} alt="" />
                    
                    </div>
   
                    <div className="border rounded-lg p-20 mt-10">
                          <h1 className='text-center font-bold text-3xl mb-5'>Sign Up</h1>
                           <form onSubmit={handleRegister}>

                                    <label className="label">
                                    <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="email" className="input input-bordered w-full" required />  

                                    <label className="label">
                                    <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                 
                                    <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <button className="btn btn-active btn-secondary w-full mt-4">Sign Up</button>

                   
                           </form>
                            <h1 className="mt-4 text-xl font-bold text-center">Or Sign In with</h1>
                            <button class="btn btn-outline btn-secondary w-full mt-4"><FaGoogle></FaGoogle> Google SignIn</button> 

                            <Link className="text-center" to='/login'><h1 className="mt-4">Already have an account?<span className="text-[#FF3811] font-bold underline">Login</span></h1> </Link>
                    </div>                  
                                    
             </div>
             
        </div>             
            
        </div>
    );
};

export default Register;