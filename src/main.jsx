import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Catalog } from './pages/Catalog/index.jsx';
import { Film } from './pages/Film/index.jsx';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Catalog />,
      },
      {
        path: '/film/:id',
        element: <Film />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
