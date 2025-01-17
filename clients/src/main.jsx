import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.jsx'
import {Provider} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </StrictMode>,
)
