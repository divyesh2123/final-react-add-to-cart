import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import Product from './Product';
import ProHeader from './ProHeader';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>


          <ProHeader/>

          <Product/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
