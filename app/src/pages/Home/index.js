import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { Banner, Main } from "./style";

function Home(){
    return(
        <>
            <Header/>
            <Main>
                <Banner>
                    <Modal/>
                </Banner>
                <Cards/>
            </Main>
        </>
    );
}

export default Home;