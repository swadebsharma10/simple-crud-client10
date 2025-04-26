import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPage from './Pages/UsersPage.jsx';
import Update from './Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/users",
    element: <UsersPage/>,
    loader: ()=> fetch(`http://localhost:5000/users`)
  },
  {
    path: '/update/:id',
    element: <Update/>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
