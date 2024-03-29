import React from 'react';
import ReactDOM from 'react-dom';
import GamePlayer from './containers/gamePlayer'
import {Provider} from 'react-redux'
import store from './store'

const App = (
  <Provider store = {store}>
    <GamePlayer />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
