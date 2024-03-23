import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../../public/assets/icons/auto.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer p-20 bg-slate-900 text-base-content">
                     <aside className="text-white">
                       <img className='w-24 bg-white rounded-full h-24' src={logo} alt="" />
                       <p className='pt-4'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                        <div className='flex gap-x-3'>
                            <span className='bg-blue-500 p-2 rounded-full'><FaFacebook></FaFacebook></span>
                            <span className='bg-blue-200 p-2 rounded-full'><FaTwitter></FaTwitter></span>
                            <span className='bg-red-300 p-2 rounded-full'><FaInstagram></FaInstagram></span>
                            <span className='bg-red-500 p-2 rounded-full'><FaYoutube></FaYoutube></span>
                        </div>
                     </aside> 
                     <nav className="text-white">
                       <h6 className="footer-title">Services</h6> 
                       <a className="link link-hover">Branding</a>
                       <a className="link link-hover">Design</a>
                       <a className="link link-hover">Marketing</a>
                       <a className="link link-hover">Advertisement</a>
                     </nav> 
                     <nav className="text-white">
                       <h6 className="footer-title">Company</h6> 
                       <a className="link link-hover">About us</a>
                       <a className="link link-hover">Contact</a>
                       <a className="link link-hover">Jobs</a>
                       <a className="link link-hover">Press kit</a>
                     </nav> 
                     <nav className="text-white">
                       <h6 className="footer-title">Legal</h6> 
                       <a className="link link-hover">Terms of use</a>
                       <a className="link link-hover">Privacy policy</a>
                       <a className="link link-hover">Cookie policy</a>
                     </nav>
          </footer>
        </div>
    );
};

export default Footer;