import Footer from "../../../Sheard/Footer/Footer";
import Navbar from "../../../Sheard/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import PopularProducts from "../PopularProducts/PopularProducts";
import Service from "../Service/Service";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";





const Home = () => {
    return (
        <div>
            
        <div className="max-w-7xl mx-auto mt-4">
        <Navbar></Navbar>

             <Banner></Banner>
             <div className="mt-20">
             <AboutUs></AboutUs>
             </div>

            <div className="mt-44">
            <Service></Service>
            
            </div>
             <div className="mt-10 mb-10">
                <Contract></Contract>
             </div>
             <div className="mt-10 mb-10">
                <PopularProducts></PopularProducts>
             </div>
             <div className="mt-10 mb-10">
               <Team></Team>
             </div>
             <div className="mt-10 mb-10">
              <CoreFeatures></CoreFeatures>
             </div>
             <div className="mt-10 mb-10">
              <Testimonial></Testimonial>
             </div>
             
        </div>
        <div className="mt-10 mb-10">
        <Footer></Footer>
       </div>
       </div>

    );
};

export default Home;