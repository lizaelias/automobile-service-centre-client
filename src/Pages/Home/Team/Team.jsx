

import teams1 from '../../../../public/assets/images/team/teams1.jpg'
 import teams2 from '../../../../public/assets/images/team/teams2.jpg'
 import teams3 from '../../../../public/assets/images/team/teams3.jpg'


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";



const Team = () => {
    return (
        <div>

          <div className="text-center space-y-4">
                <p className="text-[#FF3811] font-bold text-2xl">Teams</p>
                <h1 className="text-4xl font-bold">Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>

            <div className="card border p-5 ">
                          <figure>
                          <img src={teams1} alt="Shoes" className="rounded-xl" />
                          </figure>
                          <div className="card-body items-center text-center space-y-2">
                          
                            <h2 className="text-3xl font-bold">Car Engine Plug</h2>
                            <p className='text-2xl font-bold text-[#737373] '>Engine Expert</p>
                            <div className='flex gap-2 items-center'>
                                 <span className='text-4xl text-[#395185]'> <FaFacebook></FaFacebook></span>
                                 <span className='text-4xl text-[##55ACEE]'> <FaTwitter></FaTwitter></span>
                                 <span className='text-4xl text-red-400'> <FaInstagram></FaInstagram></span>
                                 <span className='text-4xl text-red-700'> <FaYoutube></FaYoutube></span>
                            </div>
                            
                           </div>
               </div>
            <div className="card border p-5 ">
                          <figure>
                          <img src={teams2} alt="Shoes" className="rounded-xl" />
                          </figure>
                          <div className="card-body items-center text-center space-y-2">
                          
                            <h2 className="text-3xl font-bold">Car Engine Plug</h2>
                            <p className='text-2xl font-bold text-[#737373] '>Engine Expert</p>
                            <div className='flex gap-2 items-center'>
                                 <span className='text-4xl text-[#395185]'> <FaFacebook></FaFacebook></span>
                                 <span className='text-4xl text-[##55ACEE]'> <FaTwitter></FaTwitter></span>
                                 <span className='text-4xl text-red-400'> <FaInstagram></FaInstagram></span>
                                 <span className='text-4xl text-red-700'> <FaYoutube></FaYoutube></span>
                            </div>
                            
                           </div>
               </div>
            <div className="card border p-5 ">
                          <figure>
                          <img src={teams3} alt="Shoes" className="rounded-xl" />
                          </figure>
                          <div className="card-body items-center text-center space-y-2">
                          
                            <h2 className="text-3xl font-bold">Car Engine Plug</h2>
                            <p className='text-2xl font-bold text-[#737373] '>Engine Expert</p>
                            <div className='flex gap-2 items-center'>
                                 <span className='text-4xl text-[#395185]'> <FaFacebook></FaFacebook></span>
                                 <span className='text-4xl text-[##55ACEE]'> <FaTwitter></FaTwitter></span>
                                 <span className='text-4xl text-red-400'> <FaInstagram></FaInstagram></span>
                                 <span className='text-4xl text-red-700'> <FaYoutube></FaYoutube></span>
                            </div>
                            
                           </div>
               </div>

            </div>
            
        </div>
    );
};

export default Team;