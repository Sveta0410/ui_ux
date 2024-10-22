import { createBrowserRouter } from "react-router-dom"
import { Home } from "./Home"
import { Catalog } from "./Catalog"
import { Product } from "./Product"


export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/product", element: <Product /> },
])