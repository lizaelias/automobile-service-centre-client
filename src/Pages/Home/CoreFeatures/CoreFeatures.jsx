
import futures1 from '../../../../public/assets/icons/futures1.svg'
import futures2 from '../../../../public/assets/icons/futures2.svg'
import futures3 from '../../../../public/assets/icons/futures3.svg'
import futures4 from '../../../../public/assets/icons/futures4.svg'

import futures6 from '../../../../public/assets/icons/futures6.svg'


const CoreFeatures = () => {
    return (
        <div className='p-3 md:p-0 lg:p-0'>
             <div className="text-center space-y-4">
                <p className="text-[#FF3811] font-bold text-2xl">Core Features</p>
                <h1 className="text-4xl font-bold">Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
             
             <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10 mb-10 items-center' data-aos="flip-down">

             <div className="card border p-7">
                          <figure>
                          <img src={futures1} alt="Shoes" className="rounded-xl pt-4" />
                          </figure>
                          <div>
                          
                            <h2 className="text-xl font-bold mt-5">Car Engine Plug</h2>
                            
            
                           </div>
               </div>
               <div className="card border p-7 ">
                          <figure>
                          <img src={futures2} alt="Shoes" className="rounded-xl pt-4" />
                          </figure>
                          <div>
                          
                            <h2 className="text-xl font-bold mt-5">Car Engine Plug</h2>
                            
            
                           </div>
               </div>
               <div className="card border p-7 ">
                          <figure>
                          <img src={futures3} alt="Shoes" className="rounded-xl pt-4" />
                          </figure>
                          <div>
                          
                            <h2 className="text-xl font-bold mt-5">Car Engine Plug</h2>
                            
            
                           </div>
               </div>
               <div className="card border p-7 ">
                          <figure>
                          <img src={futures4} alt="Shoes" className="rounded-xl pt-4" />
                          </figure>
                          <div>
                          
                            <h2 className="text-xl font-bold mt-5">Car Engine Plug</h2>
                            
            
                           </div>
               </div>
               <div className="card border p-7 ">
                          <figure>
                          <img src={futures1} alt="Shoes" className="rounded-xl pt-4" />
                          </figure>
                          <div>
                          
                            <h2 className="text-xl font-bold mt-5">Car Engine Plug</h2>
                            
            
                           </div>
               </div>
               <div className="card border p-7 ">
                          <figure>
                          <img src={futures6} alt="Shoes" className="rounded-xl pt-4" />
                          </figure>
                          <div>
                          
                            <h2 className="text-xl font-bold mt-5">Car Engine Plug</h2>
                            
            
                           </div>
               </div>

             </div>
        </div>
    );
};

export default CoreFeatures;