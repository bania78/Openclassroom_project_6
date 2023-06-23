import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Logement, { loader as logementLoader, } from './pages/Logement';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos/APropos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "logements/:logementId",
        element: <Logement />,
        errorElement: <ErrorPage />,
        loader: logementLoader,
      },
      {
        path: "a_propos",
        element: <APropos />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ]

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
