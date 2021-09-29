import { App, BannerStyle, ContainerApp } from "./style";

function Banner(){
    return(
        <>
            <BannerStyle/>
        </>
    )
}

function BannerApp() {
    <>
        <ContainerApp>
            <App></App>
        </ContainerApp>
    </>
}

export default Banner;