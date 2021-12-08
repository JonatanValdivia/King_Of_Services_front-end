import { FooterStyle, LogoStyle, Inicio, SobreNos, Contatos, Copyright } from "./style";


function Footer(){
    return(
        <>
        <FooterStyle>
            <div>
                <LogoStyle>
                    <h1> King Of Services</h1> 
                    {/* <p>Almost before</p> */}
                </LogoStyle>
                <Inicio>
                    <p>Inicio</p>
                    <p><a href="\">Home</a></p>
                    <p><a href="#maisPedidos">Mais Pedidos</a></p>
                    <p><a href="#servicos">Serviços</a></p>
                </Inicio>
                <SobreNos>
                    <p>Sobre nós</p>
                    <p><a href="#sobre_nos">Informações da empresa</a></p>
                    <p>Contatos</p>
                </SobreNos>
                <Contatos>
                    <div>
                        <a href="https://www.facebook.com/">
                            <i className="fa fa-brands fa-facebook-f"></i>
                        </a>  
                        <a href="https://www.instagram.com/">
                            <i className="fa fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <i className="fa fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div>Contatos</div>
                </Contatos>
            </div>
            <Copyright>
                <hr/>
                <p>2021 Copyright - King of Services</p>
            </Copyright>
        </FooterStyle>
        </>
    );
}

export default Footer;