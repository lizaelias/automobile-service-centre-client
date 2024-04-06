import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";




const Service = () => {
    const [serviceData, setSerViceData] =useState([]);

    useEffect(()=>{
        fetch('https://automobile-service-centre-server.vercel.app/services')
        .then(res => res.json())
        .then(data =>{
             console.log(data)
            setSerViceData(data)
        })
    },[])
    return (
        <div>
             <div className="text-center mb-10 space-y-4">
                 <p className="text-[#FF3811] font-bold text-2xl">Service</p>
                 <h1 className="text-4xl font-bold">Our Service Area</h1>
                 <p>the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable. </p>
             </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    serviceData.map(services =><ServiceCard key={services._id} services={services}></ServiceCard>)
                }
              </div>
              
              <div className="mt-7 mb-7 text-center">
             <button className="btn btn-outline btn-secondary">More Services</button>
             </div>

        </div>
    );
};

export default Service;