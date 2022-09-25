import * as React from "react";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

import "./index.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Button from "./components/button/Button";

const App = () => (
    <>
        <Header/>
        <div className="container">
            <div>Name: layout micro front</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>
            <Button>Click me</Button>
        </div>
        <Footer/>
    </>
);
root.render(<App/>);
