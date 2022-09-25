import * as React from "react";
import {createRoot} from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
// @ts-ignore
import Header from "layout/Header";
import "./index.css";

const App = () => (
    <>
        <Header/>
        <div className="container">
            <div>Name: micro fronts container</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>

        </div>
    </>
);
root.render(<App/>);
