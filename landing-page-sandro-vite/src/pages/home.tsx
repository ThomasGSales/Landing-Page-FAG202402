import '../styles/utility.css'
import myLogo from "../assets/logo/logo.png";


export default function Home() {
    return (
        <>
            
            <header className='container'>
                <img src={myLogo} alt="logo" />
                <ul className="even-columns">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Soluções</a></li>
                    <li><a href="#">Depoimento</a></li>
                    <li><a href="#">Preços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </header>
        </>
    )
}