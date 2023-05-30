import App from './App';
import About from './Pages/About';
import Notes from './Pages/Notes';
import Main from './Pages/Main';
import Blog from './Pages/Blog';
import Noticias from './Pages/Noticias';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Main/>,
        },
        {
          path: "about",
          element: <About/>,
        },
        {
          path: "notes",
          element: <Notes/>,
        },
        {
          path: "blog",
          element: <Blog/>,
        },
        {
          path: "noticias",
          element: <Noticias/>,
        }      
      ]
    }
  ])
  