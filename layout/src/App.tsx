import * as React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import "./index.css";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Dots from "./components/dots/Dots";
import Home from "./components/home/Home";
import Video from "./components/videoSec/Video";
import Money from "./components/money/Money";
import Shop from "./components/shop/Shop";
import Beneficios from "./components/beneficios/Beneficios";

const App = () => (
    <>
        <Header />
        <div className="container">
            <div className="contenedor">
                {/* <Home /> */}
                {/* <Video /> */}
                {/* <Money /> */}
                {/* <Shop /> */}
                <Beneficios />
            </div>
            <Dots />
        </div>
        <Footer />
    </>
);
root.render(<App />);
