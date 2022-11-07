import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppPropsType, state} from "./redux/state";
import {renderT} from "./redux/render";


renderT(state)