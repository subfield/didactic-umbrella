import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './../store';
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from '../redux/api';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/*<ApiProvider api={api}>*/}
      <App />
      {/*</ApiProvider>*/}
    
    </Provider>

   
  </StrictMode>,
)
