import user1 from '../../../../public/assets/images/users/user.jpg'
import user2 from '../../../../public/assets/images/users/user2.jpg'


const Testimonial = () => {
    return (
        <div className='p-3 md:p-0 lg:p-0'>

           <div className="text-center space-y-4">
                <p className="text-[#FF3811] font-bold text-2xl">Testimonial</p>
                <h1 className="text-4xl font-bold">What Customer Says</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
                 <div className='space-y-4 p-10  border rounded-lg'>
                    <div className='flex gap-x-3 items-center'>
                        <img className='w-20 h-20 rounded-full' src={user1} alt="" />
                        <div>
                            <h1 className='text-2xl font-bold'>Awlad Hossain</h1>
                            <p>Businessman</p>
                        </div>
                       
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>
                 </div>
                 <div className='space-y-4 p-10  border rounded-lg'>
                    <div className='flex gap-x-3 items-center'>
                        <img className='w-20 h-20 rounded-full' src={user2} alt="" />
                        <div>
                            <h1 className='text-2xl font-bold'>Md:Elias Hossen</h1>
                            <p>Software Engineer</p>
                        </div>
                       
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                      </div>
                 </div>
                 
             </div>
            
        </div>
    );
};

export default Testimonial;