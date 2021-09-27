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
            </Main>
        </>
    );
}

export default Home;