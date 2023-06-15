import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router}>

   <Route path="*" element={<ErrorPage/>}/>
   </RouterProvider>
   </div>
   </AuthProvider>
  </React.StrictMode>,
)
