import myLogo from "../assets/logo/logo.png";
import "../styles/header.css";
import "../styles/utility.css";
import { useState, useEffect } from 'react';
import Button from "./Button"
import Close from "../assets/Close.svg"
import Menu from "../assets/Menu.svg"
import "../styles/buttons.css"

export default function Header() {
    const[showMobileMenu, setShowMobileMenu] = useState(false);


    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showMobileMenu]);
    

    return (
        <>
           <header className='container py-sm'>
                <nav className='flex items-center justify-between'>
                    <img src={myLogo} alt="logo" width={50} height={50}/>
                
                    <div className='desktop-only'>
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Soluções</a></li>
                            <li><a href="#">Depoimento</a></li>
                            <li><a href="#">Preços</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>
                    <div className='desktop-only'>
                        <div className='flex items-center'>
                            <a className='reverse-color ml-lg' href="">Login</a>
                            <Button text="cadastre-se" />
                        </div>
                    </div>
                    <div className='mobile-menu'>
                        {showMobileMenu ?
                            <div className='mobile-menu-content'>
                                 <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className='btn-wrapper'>
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className='btn-wrapper'>
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}