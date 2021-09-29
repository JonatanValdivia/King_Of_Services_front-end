import Banner from "../../components/Banners";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import {Main } from "./style";

function Home(){
    return(
        <>
            <Header/>
            <Main>
                <Banner/>
                <Cards/>
            </Main>
        </>
    );
}

export default Home;