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
                    <p>Home</p>
                    <p><a href="#maisPedidos">Mais Pedidos</a></p>
                    <p><a href="#servicos">Serviços</a></p>
                </Inicio>
                <SobreNos>
                    <p>Sobre nós</p>
                    <p>Informações da empresa</p>
                    <p>Contatos</p>
                </SobreNos>
                <Contatos>
                    <div>
                        <i className="fa fa-brands fa-facebook-f"></i>
                        <i className="fa fa-brands fa-instagram"></i>
                        <i className="fa fa-brands fa-linkedin"></i>
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