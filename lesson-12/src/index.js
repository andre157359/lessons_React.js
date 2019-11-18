import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reduser';
import App from './components/app';


const store = createStore(reducer);



ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>    
    , document.getElementById('root'));




store.subscribe(() => {
    console.log(store.getState());
})








//Функция bindActionCreator есть в redux

// const bindActionCreator = (creater, dispatch) => (...args) => {
//     dispatch(creater(...args));
// }





// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});



