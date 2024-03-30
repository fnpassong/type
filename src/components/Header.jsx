import '../scss/components/header.scss';
import logo from '../assets/shared/logo.svg';
import Boton from "./common/Boton.jsx";

const Header =()=> {
    return(
        <header className='hdr' >
            <div className="hdr__wrapper">
                <img src= { logo } alt="logo-empresa"/>
                <Boton/>
            </div>
        </header>
    )
}

export default Header;