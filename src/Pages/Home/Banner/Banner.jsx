
 import one from '../../../../public/assets/images/homeCarousel/one.jpg'
 import tow from '../../../../public/assets/images/homeCarousel/tow.jpg'
 import three from '../../../../public/assets/images/homeCarousel/three.jpg'
 import fors from '../../../../public/assets/images/homeCarousel/for.jpg'


const Banner = () => {
    return (
        <div>
            
             <div className="carousel w-full mt-10 mb-10">
                        <div id="slide1" className="carousel-item relative w-full h-[600px] ">
                          <img src={one} 
                          
                          className="w-full"  />

                            <div className="absolute  left-0  right-0 h-full top-0  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                            <div className='w-96 absolute left-12 top-1/4 right-0 bottom-0 space-y-6'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                             <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                             
                             <button className="btn btn-outline btn-secondary">Discover More</button>
                             <button className="btn btn-outline btn-secondary ml-2">Latest Project</button>
                            </div>
                          </div>
                          <div className="absolute flex transform -translate-y-1/2 left-0 right-5 gap-x-2 justify-end bottom-3">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                          </div>
                       
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full h-[600px]">
                        <img src={tow} 
                          
                          className="w-full"  />

                            <div className="absolute  left-0  right-0 h-full top-0  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                            <div className='w-96 absolute left-12 top-1/4 right-0 bottom-0 space-y-6'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                             <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                             
                             <button className="btn btn-outline btn-secondary">Discover More</button>
                             <button className="btn btn-outline btn-secondary ml-2">Latest Project</button>
                            </div>
                          </div>
                          <div className="absolute flex transform -translate-y-1/2 left-0 right-5 gap-x-2 justify-end bottom-3">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                          </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full h-[600px]">
                        <img src={three} 
                          
                          className="w-full"  />

                            <div className="absolute  left-0  right-0 h-full top-0  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                            <div className='w-96 absolute left-12 top-1/4 right-0 bottom-0 space-y-6'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                             <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                             
                             <button className="btn btn-outline btn-secondary">Discover More</button>
                             <button className="btn btn-outline btn-secondary ml-2">Latest Project</button>
                            </div>
                          </div>
                          <div className="absolute flex transform -translate-y-1/2 left-0 right-5 gap-x-2 justify-end bottom-3">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                          </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full h-[600px]">
                        <img src={fors} 
                          
                          className="w-full"  />

                            <div className="absolute  left-0  right-0 h-full top-0  space-y-6 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] ">
                            <div className='w-96 absolute left-12 top-1/4 right-0 bottom-0 space-y-6'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                             <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                             
                             <button className="btn btn-outline btn-secondary">Discover More</button>
                             <button className="btn btn-outline btn-secondary ml-2">Latest Project</button>
                            </div>
                          </div>
                          <div className="absolute flex transform -translate-y-1/2 left-0 right-5 gap-x-2 justify-end bottom-3">
                            <a href="#slide3" className="btn btn-circle">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                          </div>
                        </div>
            </div>



        </div>
    );
};

export default Banner;