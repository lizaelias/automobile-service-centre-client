
 import prodect1 from '../../../../public/assets/images/products/prodect1.png'
 import prodect2 from '../../../../public/assets/images/products/prodect2.png'
 import prodect3 from '../../../../public/assets/images/products/prodect3.png'
 import prodect4 from '../../../../public/assets/images/products/prodect4.png'
 import prodect5 from '../../../../public/assets/images/products/prodect5.png'
 import prodect6 from '../../../../public/assets/images/products/prodect6.png'

const PopularProducts = () => {
    return (
        <div>
            <div className="text-center space-y-4" data-aos="fade-up" data-aos-anchor-placement="center-center">
                <p className="text-[#FF3811] font-bold text-2xl">Popular Products</p>
                <h1 className="text-4xl font-bold">Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
                <div className="card border p-5 "  data-aos="flip-left" data-aos-duration="2000">
                          <figure className="px-10 pt-10 bg-[#F3F3F3] p-6">
                          <img src={prodect1} alt="Shoes" className="rounded-xl w-[150px]" />
                          </figure>
                          <div className="card-body items-center text-center">
                          <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className='text-[#FF3811]'>$20.00</p>
                            
                           </div>
               </div>
                <div className="card border p-5 "  data-aos="flip-left" data-aos-duration="2000">
                          <figure className="px-10 pt-10 bg-[#F3F3F3] p-6">
                          <img src={prodect2} alt="Shoes" className="rounded-xl w-[150px]" />
                          </figure>
                          <div className="card-body items-center text-center">
                          <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                            <h2 className="card-title">Cools Led Light</h2>
                            <p className='text-[#FF3811]'>$30.00</p>
                            
                           </div>
               </div>
                <div className="card border p-5 "  data-aos="flip-left" data-aos-duration="2000">
                          <figure className="px-10 pt-10 bg-[#F3F3F3] p-6 ">
                          <img src={prodect3} alt="Shoes" className="rounded-xl w-[150px] h-[150px]" />
                          </figure>
                          <div className="card-body items-center text-center">
                          <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                            <h2 className="card-title">Car Air Filter</h2>
                            <p className='text-[#FF3811]'>$20.00</p>
                            
                           </div>
               </div>
                <div className="card border p-5 "  data-aos="flip-left" data-aos-duration="2000">
                          <figure className="px-10 pt-10 bg-[#F3F3F3] p-6">
                          <img src={prodect4} alt="Shoes" className="rounded-xl w-[150px]" />
                          </figure>
                          <div className="card-body items-center text-center">
                          <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                            <h2 className="card-title">Cools Led Light</h2>
                            <p className='text-[#FF3811]'>$60.00</p>
                            
                           </div>
               </div>
                <div className="card border p-5 "  data-aos="flip-left" data-aos-duration="2000">
                          <figure className="px-10 pt-10 bg-[#F3F3F3] p-6">
                          <img src={prodect5} alt="Shoes" className="rounded-xl w-[150px]" />
                          </figure>
                          <div className="card-body items-center text-center">
                          <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                            <h2 className="card-title">Cools Led Light</h2>
                            <p className='text-[#FF3811]'>$120.00</p>
                            
                           </div>
               </div>
                <div className="card border p-5 "  data-aos="flip-left" data-aos-duration="2000">
                          <figure className="px-10 pt-10 bg-[#F3F3F3] p-6">
                          <img src={prodect6} alt="Shoes" className="rounded-xl w-[150px]" />
                          </figure>
                          <div className="card-body items-center text-center">
                          <div className="rating">
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                           </div>
                            <h2 className="card-title">Car Engine Plug</h2>
                            <p className='text-[#FF3811]'>$220.00</p>
                            
                           </div>
               </div>
             </div>
        </div>
    );
};

export default PopularProducts;