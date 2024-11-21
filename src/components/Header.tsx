import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Header = () => {
    
    return (
        <header className='header'>
            <div className="logotype">
                <Link to="/"><h2>Sk1wzDev</h2></Link>
            </div>
            <Navbar />
        </header>
    );
}

export default Header;
