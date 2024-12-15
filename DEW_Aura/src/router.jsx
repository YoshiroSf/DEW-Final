import { createBrowserRouter } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Contacto } from "./pages/Contacto";
import { Entrada } from "./pages/Entrada";
import { Nosotros } from "./pages/Nosotros";
import { Blog } from "./pages/Blog";
import { Galeria } from "./pages/Galeria";
import { Tienda } from "./pages/Tienda";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/entrada",
    element: <Entrada />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/galeria",
    element: <Galeria />,
  },
  {
    path: "/tienda",
    element: <Tienda />,
  },
]);
