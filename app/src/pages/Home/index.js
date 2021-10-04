import BannerHome from "../../components/BannerHome";
import Banner from "../../components/BannerApp";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import {Main } from "./style";

function Home(){
    return(
        <>
            <Header/>
            <Main>
                <BannerHome/>
                <Cards/>
                <Banner/>
            </Main>
        </>
    );
}

export default Home;