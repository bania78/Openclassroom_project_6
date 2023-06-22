import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Logement, { loader as logementLoader, } from './components/Logement';
import Accueil from './components/Accueil';
import APropos from './components/APropos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Accueil />,
        errorElement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
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
