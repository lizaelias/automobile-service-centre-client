import { useLoaderData } from "react-router-dom";

import checoutImages from '../../../public/assets/images/checkout/checkout.png'
import Navbar from "../../Sheard/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const services = useLoaderData();
  const{user}=useContext(AuthContext);
  console.log(services);
  const {_id,title, price,img } = services;


   const handleBookService = e =>{
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const date = form.date.value;
       const email =user?.email;
       
       const booking ={
         coustomerName:name,
         date,
         email,
         img,
         service_id:_id,
         services:title,
         price:price
       }
       console.log(booking)

    //    postdata server
            
     fetch('https://automobile-service-centre-server.vercel.app/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
     })
     .then(res =>res.json())
     .then(data =>{
        console.log(data)
        if(data.insertedId){
            Swal.fire({
                
                icon: "success",
                title: "Your order successflly done",
                showConfirmButton: false,
                timer: 1500
              });
        }
     })
         
       
   }

  return (
    <div className="max-w-7xl mx-auto p-2 mb-10">
        <Navbar></Navbar>

           <div className="relative mt-10 z-0">
             <img className="w-full" src={checoutImages} alt="" />
              <div className="absolute left-0  right-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                <div className="absolute left-12 right-0 top-[40%]">
                <h1 className="text-5xl font-bold text-white">Check Out</h1>
                </div>
                 
                 
                 
              </div>
              <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2">
                    <h1 className='bg-[#FF3811] rounded-lg text-white text-2xl w-fit py-1 lg:py-5 px-4 lg:px-20'>Home/Checkout</h1>

                 </div>
                
           </div>

           
         <div className="p-32 bg-slate-100 mt-20 rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>

            {/* form */}
            <form onSubmit={handleBookService}>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
               <div>
                <label className="label">
                <span className="label-text">name</span>
               </label>
                 <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
                required
                />
                </div>
                
                <div>
                <label className="label">
                <span className="label-text">Date</span>
               </label>
                 <input
                type="date"
                name="date"
                placeholder="date"
                className="input input-bordered w-full"
                required
                />
                </div>

                <div>
                <label className="label">
                <span className="label-text">Email</span>
               </label>
                 <input 
                 defaultValue={user.email}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
                />
                </div>

                <div>
                <label className="label">
                <span className="label-text">Price</span>
               </label>
                 <input
                type="text"
                name="price"
                placeholder="email"
                defaultValue={'$'+ price}
                className="input input-bordered w-full"
                required
                />
                </div>
               </div>

               
               <button className="btn btn-outline btn-secondary w-full mt-10">Order Confirm</button>
            </form>
         </div>
      
    </div>
  );
};

export default CheckOut;
