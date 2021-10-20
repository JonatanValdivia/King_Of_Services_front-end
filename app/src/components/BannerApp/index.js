import AppComponents from "../App Components";
import { BannerApp } from "./style";
import Footer from "../Rodape";

function Banner(){
    return(
        <>
            <BannerApp>
                <AppComponents/>
            </BannerApp>
            <Footer/>
        </>
    );
}

export default Banner;