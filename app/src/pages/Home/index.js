import BannerHome from "../../components/BannerHome";
import Banner from "../../components/BannerApp";
import Cards from "../../components/Cards";
import Header from "../../components/Header";
import { Main, Loading } from "./style";
import Footer from "../../components/Rodape";
import api from '../../services/api';
import { useEffect, useState } from 'react';

function Home(){
    const [prestadores, setPrestadores] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        api.get(`Prestadores`).then(({data}) => {
            setPrestadores(data)
            setLoading(false)
        });
        console.log(prestadores);
    }, [])

    if(loading){
        return (
            <Loading>
                <div class="loadingio-spinner-spinner-fc0yl4ooufr">
                    <div class="ldio-lzv6rff8cna">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </Loading>

        )
    }

    return(
        <>
            <Header/>
            <Main>
                <BannerHome/>
                <Cards/>
                <Banner/>
            </Main>
            <Footer/>
        </>
    );
}

export default Home;