import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import TableRow from "./TableRow";




const Booking = () => {
     const {user} =useContext(AuthContext);

     const [booking, setBooking]=useState([]);
     console.log(booking)

     const url =`http://localhost:5000/bookings?email=${user?.email}`;

      useEffect(()=>{
       fetch(url)
       .then(res => res.json())
       .then(data =>setBooking(data) )
      },[url])



    return (
        <div className="max-w-7xl mx-auto">
           

            <div className="overflow-x-auto">
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
                              
                              booking.map(book =><TableRow key={book._id} book={book}></TableRow>)
                            }
                    
                    
                         </tbody>
                         
                        
                         
                    </table>
</div>
 
   
    


        </div>
    );
};

export default Booking;

