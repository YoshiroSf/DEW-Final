export const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="grid-footer contenedor">
          <div>
            <h3>Categorías</h3>

            <nav className="footer-menu">
              <a href="#">Cocina</a>
              <a href="#">Oficina</a>
              <a href="#">Jardín</a>
              <a href="#">Cochera</a>
              <a href="#">Dormitorios</a>
            </nav>
          </div>

          <div>
            <h3>Sobre Nosotros</h3>
            <nav className="footer-menu">
              <a href="#">Nuestra Historia</a>
              <a href="#">Misión, Visión y Valores</a>
              <a href="#">Carreras</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos del Servicio</a>
            </nav>
          </div>

          <div>
            <h3>Soporte</h3>
            <nav className="footer-menu">
              <a href="#">Preguntas Frecuentes</a>
              <a href="#">Ayuda en línea</a>
              <a href="#">Confianza y Seguridad</a>
            </nav>
          </div>
        </div>

        <div className="whatsapp">
          <a href="#">
            <img src="/img/whatsapp.png" alt="Whatsapp"/> 
          </a>
          <span className="popup">Contáctanos</span>
        </div>


        <p className="copyright">Todos los derechos Reservados, TiendaMuebles</p>
      </footer>
    </div>
  );
};
