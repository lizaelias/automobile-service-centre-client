import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import TableRow from "./TableRow";
import Swal from "sweetalert2";




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
                
                fetch(`http://localhost:5000/bookings/${id}`,{
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

