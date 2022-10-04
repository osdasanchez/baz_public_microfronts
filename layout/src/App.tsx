import * as React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import "./index.css";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import Home from "./components/home/Home";
import Dots from "./components/dots/Dots";



const App = () => (
    <>
        <Header />
        <div className="container">
            <Home />
            <Dots />
        </div>
        <Footer />
    </>
);
root.render(<App />);
