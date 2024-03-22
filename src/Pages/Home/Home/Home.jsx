import Navbar from "../../../Sheard/Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";





const Home = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <Navbar></Navbar>

             <Banner></Banner>
             <div className="mt-20">
             <AboutUs></AboutUs>
             </div>

            <div className="mt-44">
            <Service></Service>
            </div>
        </div>
    );
};

export default Home;