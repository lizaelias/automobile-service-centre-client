

import error from '../../../public/assets/images/errorpage/not404.gif'
import Navbar from '../../Sheard/Navbar/Navbar';

const EroorPage = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div>
            <img className='mx-auto' src={error} alt="" />
            </div>
        </div>
    );
};

export default EroorPage;