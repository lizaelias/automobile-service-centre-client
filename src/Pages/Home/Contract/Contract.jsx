
import { CiCalendarDate, CiLocationOn, CiPhone } from "react-icons/ci";


const Contract = () => {
    return (
        <div className="bg-gray-950 rounded-lg h-[250px] flex justify-around items-center p-3 md:p-10 lg:p-14" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          
                <div className="flex items-center gap-x-3">
                 <span className="text-[#FF3811] text-4xl"><CiCalendarDate></CiCalendarDate></span>
                  <div>
                     <p className="text-white">We are open monday-friday</p>
                     <h2 className="lg:text-2xl text-white">7:00 am - 9:00 pm</h2>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                 <span className="text-[#FF3811] text-4xl"><CiPhone></CiPhone></span>
                  <div>
                     <p className="text-white">Have a question?</p>
                     <h2 className="lg:text-2xl text-white">+2546 251 2658</h2>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                 <span className="text-[#FF3811] text-4xl"><CiLocationOn></CiLocationOn></span>
                  <div>
                     <p className="text-white">Need a repair? our address</p>
                     <h2 className="lg:text-2xl text-white">Liza Street, New York</h2>
                  </div>
                </div>
            
        </div>
    );
};

export default Contract;