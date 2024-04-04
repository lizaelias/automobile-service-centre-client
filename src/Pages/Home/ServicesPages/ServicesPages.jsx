import Navbar from "../../../Sheard/Navbar/Navbar";
import checoutImages from '../../../../public/assets/images/checkout/checkout.png'
import Serviceimages from '../../../../public/assets/images/banner/3.jpg'
import Servicelogo from '../../../../public/assets/icons/auto.png'
import { FaArrowAltCircleRight, FaArrowRight, FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../../Sheard/Footer/Footer";



const ServicesPages = () => {
    return (
         <div>
        <div className="max-w-7xl mx-auto p-2 mb-10">
            <Navbar></Navbar>
             
            <div className="relative mt-10 z-0" data-aos="fade-down-left">
             <img className="w-full" src={checoutImages} alt="" />
              <div className="absolute left-0  right-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                <div className="absolute left-12 right-0 top-[40%]">
                <h1 className="text-5xl font-bold text-white">Services Details</h1>
                </div>
                 
                 
                 
              </div>
              <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2">
                    <h1 className='bg-[#FF3811] rounded-lg text-white text-2xl w-fit py-1 lg:py-5 px-4 lg:px-20'>Home/Details</h1>

            </div>

           </div>

         {/* grid section */}
             <div className="grid grid-cols-3 gap-10 mt-24">
                <div className="col-span-2 space-y-4">
                     <img className="h-[400px] w-full" src={Serviceimages } alt="" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" />
                     <h1 className="mt-10 text-3xl font-bold">Unique Car Engine Service</h1>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    
                    <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" >
                        <div className="p-10 border-t-4 border-[#FF3811] bg-slate-100 rounded-lg">
                         <h1 className="text-2xl font-bold">Instant Car Services</h1>
                         <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className="p-10 bg-slate-100 border-t-4 border-[#FF3811] rounded-lg"  data-aos="flip-left">
                         <h1 className="text-2xl font-bold">24/7 Quality Service</h1>
                         <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className="p-10 bg-slate-100 border-t-4 border-[#FF3811] rounded-lg" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                         <h1 className="text-2xl font-bold">Easy Customer Service</h1>
                         <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        <div className="p-10 bg-slate-100 border-t-4 border-[#FF3811] rounded-lg"  data-aos="flip-left">
                         <h1 className="text-2xl font-bold">Quality Cost Service</h1>
                         <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                        </div>
                        
                   </div>
                   <p data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                 
                  {/* 3 Simple Steps to Process */}
                    <div>
                    
                    <h1 className="mt-10 text-3xl font-bold">3 Simple Steps to Process</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                     
                     {/* grid three */}
                    <div className="grid grid-cols-3 gap-3 mt-10" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                   
                        <div className="card border p-7 ">
                        <figure>
                         <span className="bg-[#FF3811] rounded-full w-20 h-20 flex items-center justify-center border-8 border-red-200">
                             <span className="text-center text-white font-xl font-bold">01</span>
                          </span>
                          </figure>
                          <div className="text-center">
                          
                          <h2 className="text-2xl font-bold uppercase mt-4">Step One</h2>
                           <p>It uses a dictionary of over 200 .</p>
                            
            
                           </div>
                         </div>
                        <div className="card border p-7 ">
                        <figure>
                         <span className="bg-[#FF3811] rounded-full w-20 h-20 flex items-center justify-center border-8 border-red-200">
                             <span className="text-center text-white font-xl font-bold">02</span>
                          </span>
                          </figure>
                          <div className="text-center">
                          
                          <h2 className="text-2xl font-bold uppercase mt-4">Step Tow</h2>
                           <p>It uses a dictionary of over 200 .</p>
                            
            
                           </div>
                         </div>
                        <div className="card border p-7 ">
                        <figure>
                         <span className="bg-[#FF3811] rounded-full w-20 h-20 flex items-center justify-center border-8 border-red-200">
                             <span className="text-center text-white font-xl font-bold">03</span>
                          </span>
                          </figure>
                          <div className="text-center">
                          
                          <h2 className="text-2xl font-bold uppercase mt-4">Step Three</h2>
                           <p>It uses a dictionary of over 200 .</p>
                            
            
                           </div>
                         </div>
                      
                 

                    </div>

                     {/* video  */}
                     <div className="mt-10">
                        
                     <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/fPjOWekzeGI?si=33El1HOPbG9-9Q_K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>


                     </div>
                   

                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-slate-100 p-5 rounded-xl space-y-4">
                      <h1 className="text-2xl font-bold">Services</h1>
                      <button className="btn btn-outline btn-secondary w-full" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Full Car Repair <span><FaArrowAltCircleRight></FaArrowAltCircleRight></span></button>

                      <button className="btn btn-outline btn-secondary w-full" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Engine Repair <span><FaArrowAltCircleRight></FaArrowAltCircleRight></span></button>
                        
                      <button className="btn btn-outline btn-secondary w-full" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Engine Oil Change <span><FaArrowAltCircleRight></FaArrowAltCircleRight></span></button> 

                      <button className="btn btn-outline btn-secondary w-full" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">Automatic Services<span><FaArrowAltCircleRight></FaArrowAltCircleRight></span></button>
                        
                      <button className="btn btn-outline btn-secondary w-full">Battery Charge <span><FaArrowAltCircleRight></FaArrowAltCircleRight></span></button> 
                    </div>

                     {/* Download section */}

                     <div className="bg-slate-900 rounded-lg p-5 mt-10">
                     <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <span  className="text-white"><FaList></FaList></span>
                             <div>
                                <h2 className="text-xl text-white">Our Brochure</h2>
                                <p className="text-white">Download</p>
                             </div>
                        </div> 
                        <div className="bg-[#FF3811] w-10 px-6 py-3 rounded-lg  flex justify-center items-center">
                            <span className="text-white"><FaArrowRight></FaArrowRight></span>
                        </div> 
                    </div>
                     <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                            <span className="text-white"><FaList></FaList></span>
                             <div>
                                <h2 className="text-xl text-white">Company Details</h2>
                                <p className="text-white">Download</p>
                             </div>
                        </div> 
                        <div className="bg-[#FF3811] w-10 px-6 py-3 rounded-lg  flex justify-center items-center">
                         <span className="text-white"><FaArrowRight></FaArrowRight></span>
                        </div> 
                      </div>
                         
                     </div>



                     {/*  */}

                      <div className="bg-slate-900 rounded-lg p-5 mt-10">

                       <div className="card text-center">
                       <figure>
                         <span className="bg-[#FF3811] rounded-full w-20 h-20 flex items-center justify-center border-8 border-red-200">
                         <img className="" src={Servicelogo} alt="" />
                          </span>
                         </figure>
                          <h1 className="text-2xl font-bold text-white mt-4">AutoMobile Service</h1>
                          <p className="text-white mt-2">Need Help? We Are Here
                           To Help You</p>
                       </div>

                      
                        


                      </div>

                      <div className="mt-10">
                            <h1 className="text-3xl font-bold">Price $250.00</h1>
                      </div>

                       <Link to='/'>
                       <button className="btn bg-[#FF3811] w-full mt-2 text-white">Proceed Checkout <span><FaArrowAltCircleRight></FaArrowAltCircleRight></span></button>
                       </Link>

                </div>
                   
            </div>
            
            

        </div>
        <div className="mt-10">
             <Footer></Footer>
        </div>
        </div>
    );
};

export default ServicesPages;