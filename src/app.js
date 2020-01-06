import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import Store from "./redux/store";
import './styles/styles.scss'

const APPLICATION = (
    <div>
        <h1>TEST!</h1>
    </div>
    // <Provider store={Store}>
    //     <Component/>
    // </Provider>
);

const APPROOT = document.getElementById("app");

ReactDOM.render(APPLICATION, APPROOT);