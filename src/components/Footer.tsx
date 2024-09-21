// components/Footer.tsx
import '../styles/footer.css';
import logoInstagram from '../assets/sociais/instagram.svg'
import logoFacebook from '../assets/sociais/facebook.svg'
import logoYoutube from '../assets/sociais/youtube.svg'
import myLogo from "../assets/logo/logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div style={{msFlexDirection: "column"}}>
                    <div className="footer-logo">
                        <img src={myLogo} alt="LogoMarca"/>
                    </div>
                    <div>
                        <ul style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                            <li style={{width: "25px"}}><a href="#"><img src={logoInstagram} alt="logo do instagram" /></a></li>
                            <li style={{width: "25px"}}><a href="#"><img src={logoFacebook} alt="logo do facebook" /></a></li>
                            <li style={{width: "25px"}}><a href="#"><img src={logoYoutube} alt="logo do youtube" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <p>Thomas Gabriel Martins Sales</p>
            </div>
        </footer>
    );
}
