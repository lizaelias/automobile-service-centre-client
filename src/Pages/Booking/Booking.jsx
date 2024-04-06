import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import TableRow from "./TableRow";
import Swal from "sweetalert2";
import checoutImages from '../../../public/assets/images/checkout/checkout.png'
import Navbar from "../../Sheard/Navbar/Navbar";




const Booking = () => {
     const {user} =useContext(AuthContext);

     const [booking, setBooking]=useState([]);
     console.log(booking)
 

     const url =`https://automobile-service-centre-server.vercel.app/bookings?email=${user?.email}`;

      useEffect(()=>{
       fetch(url)
       .then(res => res.json())
       .then(data =>setBooking(data) )
      },[url])
    

     const handleDelete =(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://automobile-service-centre-server.vercel.app/bookings/${id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          const remainder =booking.filter(bok=> bok._id !==id)
                          setBooking(remainder);
                        
                        
                    
                    }
                })
             
            }
          });
          
     }

     

    return (
        <div className="max-w-7xl mx-auto">
             

             <div>
                <Navbar></Navbar>
             </div>
             <div className="relative mt-10 mb-32 z-0">
             <img className="w-full" src={checoutImages} alt="" />
              <div className="absolute left-0  right-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                <div className="absolute left-12 right-0 top-[40%]">
                <h1 className="text-5xl font-bold text-white">My Booking</h1>
                </div>
                 
                 
                 
              </div>
              <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2">
                    <h1 className='bg-[#FF3811] rounded-lg text-white text-2xl w-fit py-1 lg:py-5 px-4 lg:px-20'>Mybooking/Checkout</h1>

                 </div>
                
           </div>

             
           

            <div className="overflow-x-auto mb-32">
                          <table className="table">
                         {/* head */}
                         <thead>
                           <tr>
                             <th>
                               <label>
                                 <input type="checkbox" className="checkbox" />
                               </label>
                             </th>
                             <th>Image</th>
                             <th>Service</th>
                             <th>Gmail</th>
                             <th>coustomerName</th>
                             <th>date</th>
                             <th>service_id</th>
                           </tr>
                         </thead>
                         <tbody>
                           {/* row 1 */}
                         
                        
                           {
                              
                              booking.map(book =>
                                <TableRow
                                 key={book._id} 
                                 handleDelete={handleDelete}
                                
                                book={book}></TableRow>)
                            }
                    
                    
                         </tbody>
                         
                        
                         
                    </table>
</div>
 
   
    


        </div>
    );
};

export default Booking;

