import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header>
        <h1 className="nombre-sitio">
          Aura <span> Home </span>
        </h1>
      </header>

      <div className="contenedor-navegacion">
        <nav className="nav-principal contenedor">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </div>
    </div>
  );
};
