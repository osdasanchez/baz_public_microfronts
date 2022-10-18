import * as  React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HomeSection from "../../components/home-section/HomeSection";
import SimpleFooter from "../../components/footer/SimpleFooter";
import Video from "../../components/videoSec/Video";
import Money from "../../components/money/Money";
import Beneficios from "../../components/beneficios/Beneficios";
import Faq from "../../components/faq/Faq";
import Dots from "../../components/dots/Dots";
import Slider from "../../components/slider/Slider";


const Home = () => {
    return (
        <>

            <Header/>
            <Slider />
            {/*<Footer/>*/}
            {/*<SimpleFooter/>*/}
            {/*<Dots />*/}
        </>
    )
}

export default Home
