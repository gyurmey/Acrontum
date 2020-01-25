import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Slots from './components/slots'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
  <Slots/>
    </div>
    </Provider>
  );
}

export default App;
