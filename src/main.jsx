import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Routes/root'
import Shop from './Routes/shop'
import Home from './Routes/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <p>Fuckin Error Fuck</p>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

/*
{
  path: "/shop",
  element: <div>ShopStuff</div>,
}*/