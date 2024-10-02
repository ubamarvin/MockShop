//main.jsx
// Classes and Functions
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//DataProviders
import { StoreDataProvider } from './Context/DataProvider'

//Routes
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
    <StoreDataProvider>
      <RouterProvider router={router} />
    </StoreDataProvider>
  </StrictMode>,
)

/*
{
  path: "/shop",
  element: <div>ShopStuff</div>,
}*/