import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Maps from './pages/Maps'
import { CnpjProvider } from "./context/CnpjContext";

  const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/maps", element: <Maps /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CnpjProvider>
      <RouterProvider router={router} />
    </CnpjProvider>
  </React.StrictMode>
);