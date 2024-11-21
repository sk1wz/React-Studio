import { FiGrid, FiHeart, FiLayers } from "react-icons/fi";
import { information } from "../types/variables";
const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <a href="#Services"><FiGrid /> <span>Услуги</span></a>
                <a href="#Advantage"><FiHeart /> <span>Преимущества</span></a>
                <a href={information.github} target="_blank"><FiLayers /> <span>Работы</span></a>
            </ul>
        </nav>
    );
}

export default Navbar;
