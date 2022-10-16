import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
// import {store} from "./toolkitRedux";
// import {store} from "../src/testRedux/store/store";
import  store,{persistor} from "../src/secondRedux/store/store";

import {BrowserRouter, HashRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import Loading from "./secondRedux/components/Loading";
// import {store} from "./firstReduxToolkit/store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Provider store={store}>
            <PersistGate loading={<Loading/>} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </HashRouter>
);


