
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "../components/Button"
import ButtonPremium from "../components/Button premium.tsx";
import "../styles/hero.css";
import '../styles/utility.css';
import "../styles/buttons.css";
import "../styles/section2.css";
import '../styles/footer.css';
import '../styles/carrosel.css';
import logoCard from "../assets/logo-card.svg"
import Footer from '../components/Footer.tsx';
import TestimonialCarousel from '../components/TestimonialCarousel.tsx';


export default function Home() {
    return (
        <>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Seja bem vindo(a)
                    </p>
                    <h1>Somos dragões somos guerreiros, lutaremos até sermos os primeiros</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            
            <section id="section2">
                <div className="container content">
                    <p className="desktop-only">
                        Soluções
                    </p>
                    <h1>
                        Sob medida para você                    
                    </h1>
                    <p>
                        Inovação é com a gente! A nome empresa já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                    </p>
                    <div className="flex gap-2" id="card-one-group">
                        <div className="card-one">
                            <img src={logoCard} alt="" />
                            <p>Produto Vencedor</p>
                            <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                        </div>
                        <div className="card-one">
                            <img src={logoCard} alt="" />
                            <p>Produto Vencedor</p>
                            <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                        
                        </div>
                        <div className="card-one">
                            <img src={logoCard} alt="" />
                            <p>Produto Vencedor</p>
                            <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                        
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cliente-importa" className="hero">
                <div className="container content">
                    <p className="desktop-only">Conselho de quem conheçe</p>
                    <h2>Cada cliente importa</h2>
                    <p>Nós somos a inovação!</p>
                    <TestimonialCarousel />
                </div>
            </section>

            <section id='hero' style={{height: "50vh"}}>
                <div className="container content">
                    <p className="desktop-only">
                        Preços e planos
                    </p>
                    <h2>
                        Nossos planos
                    </h2>
                </div>
            </section>
            <section id="pricing" className="pricing-section py-lg">
                <div className="container grid center" >
                    <div className="card pricing-card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3>Básico</h3>
                        <p>Baixe o ferramenta e comece a utilizar agora mesmo!</p>
                        <h2 style={{marginTop: "35px"}}>Grátis</h2>
                        <Button text="Baixar agora" secondary/>
                        <hr className="card-separator" />
                        <ul>
                            <li style={{marginTop: "35px"}}>Renconhecimento de sinais</li>
                            <li>Aprendizado continuo</li>
                            <li>Feedback da IA</li>
                        </ul>
                    </div>
                    <div className="card pricing-card premium-card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3>Premium</h3>
                        <p>Para quem deseja utilizar nossa ferramenta para vender!</p>
                        <h2>R$ 19,90/mês</h2>
                        <ButtonPremium text="Experimente de graça" secondary/>
                        <hr className="card-separator" />
                        <ul>
                            <li>Suporte multilingue</li>
                            <li>Até 1000 requisições</li>
                            <li>Licença para a venda do projeto</li>
                        </ul>
                    </div>
                    <div className="card pricing-card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h3>Empresarial</h3>
                        <p>Para quem deseja implementar a nossa ferramenta em sua empresa!.</p>
                        <h2>R$ 12,90/mês por dev</h2>
                        <Button text="Baixar agora" secondary/>
                        <hr className="card-separator" />
                        <ul>
                            <li>Sem limite de requisições</li>
                            <li>Suporte dedicado</li>
                            <li>Licença para empresa</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
            
            
                      

        </>
    )
}