import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
// import {store} from "./toolkitRedux";
// import {store} from "../src/testRedux/store/store";
import {store} from "../src/secondRedux/store/store";

import {BrowserRouter} from "react-router-dom";
// import {store} from "./firstReduxToolkit/store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
     </BrowserRouter>
);


