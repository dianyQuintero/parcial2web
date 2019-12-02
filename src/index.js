import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MoviesList from './Components/moviesList';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./Locales/es";
import localeEnMessages from "./Locales/en";


let messages=()=>{
    console.log(navigator.language)
    if(navigator.language==="es"){
        return localeEsMessages;
    }
    else if(navigator.language==="en"){
        return localeEnMessages;
    }
}
ReactDOM.render(
    <IntlProvider locale={navigator.language} messages= {messages()}>
		<MoviesList/>
	</IntlProvider>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
