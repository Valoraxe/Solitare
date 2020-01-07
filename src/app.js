import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import './styles/styles.scss';
import Gameboard from './components/gameboard';

const APPLICATION = (
    <Provider store={Store}>
        <Gameboard/>
    </Provider>
);

const APPROOT = document.getElementById("app");

ReactDOM.render(APPLICATION, APPROOT);