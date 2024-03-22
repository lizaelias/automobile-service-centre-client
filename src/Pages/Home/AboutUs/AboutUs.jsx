
import photo1 from '../../../../public/assets/images/about_us/person.jpg'
import photo2 from '../../../../public/assets/images/about_us/parts.jpg'



const AboutUs = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative">
                <img className='lg:pr-10' src={photo1} alt="" />
                <div className='absolute  left-1/2 -bottom-14  -right-20 w-full'>
                    <img className='w-1/2 h-[250px] border-8 border-white'  src={photo2} alt="" />
                </div>
                

            </div> 

       
            <div className="space-y-4 w-full pl-5">
                <p className="text-xl font-medium text-[#FF3811] mt-4">About Us</p>
                <h1 className="w-96 font-bold text-5xl">We are qualified & of experience in this field</h1>
                <p className="font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className="font-medium">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <button className='btn bg-[#FF3811] text-white'>Get More Info</button>
                
            </div>
        </div>
    );
};

export default AboutUs;