import React from 'react';
import { createRoot } from "react-dom/client";
import './scss/app.scss';

import { store } from './redux/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout';


const Home = React.lazy(() => import("./pages/Home"));
const Cart = React.lazy(() => import("./pages/Cart"));
const FullPizza = React.lazy(() => import("./pages/FullPizza"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<Layout>Loading ...</Layout>}><Home /></React.Suspense>,
  },
  {
    path: "/cart",
    element: <React.Suspense fallback={<Layout>Loading ...</Layout>} ><Cart /></React.Suspense>,
  },
  {
    path: "/pizza/:id",
    element: <React.Suspense fallback={<Layout>Loading ...</Layout>} ><FullPizza /></React.Suspense>,
  },
  {
    path: "*",
    element: <React.Suspense fallback={<Layout>Loading ...</Layout>} ><NotFound /></React.Suspense>,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
