import * as React from "react";
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import "./index.css";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Dots from "./components/dots/Dots";
import Home from "./pages/home/Home";
import Video from "./components/videoSec/Video";
import Money from "./components/money/Money";
import Shop from "./components/shop/Shop";
import Beneficios from "./components/beneficios/Beneficios";
import Faq from "./components/faq/Faq";
import TyC from "./components/tyc/TyC";

import {defaultTheme} from "./theme";
import Terms from "./pages/terms/Terms";
import Page404 from "./components/404/404";


const App = () => (
    <>
        <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video" element={<Video />} />
                <Route path="/money" element={<Money />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/beneficios" element={<Beneficios />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/tyc" element={<Terms />} />
                <Route path="/404" element={<Page404 />} />

            </Routes>
        </BrowserRouter>
        </ThemeProvider>
        {/*<Header />*/}
        {/*<div className="container">*/}
        {/*    <div className="contenedor">*/}
        {/*        <FullPage/>*/}
                 {/*<Home />*/}
                {/* <Video /> */}
                {/* <Money /> */}
                {/*<Shop />*/}
                {/* <Beneficios /> */}
                {/* <Faq /> */}
                {/*<TyC />*/}

            {/*</div>*/}
            {/*<Dots />*/}
        {/*</div>*/}
        {/*<Footer />*/}
    </>
);
root.render(<App />);
