import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import Product from './Product';
import ProHeader from './ProHeader';
import UserInfo from './UserInfo';
import MyPost from './MyPost';
import UserUserFetch from './UserUserFetch';
import PostData from './PostData';
import MyUseReducer from './MyUseReducer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>


        
          <MyUseReducer/>

          
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
