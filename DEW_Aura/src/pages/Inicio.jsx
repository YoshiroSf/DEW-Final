import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Carrusel } from "../components/Carrusel";
import Background from "../components/Background";
import Tiempo from "../components/Tiempo";

export const Inicio = () => {
  return (
    <div>
      <Background />
      <Tiempo />
      <Navbar />
      <Carrusel />

      <section className="contenedor categorias">
        <h2 className="text-center">Categorías de Productos</h2>

        <div className="listado-categorias">
          <div className="categoria">
            <img src="/img/categoria1.jpg" alt="Imagen Categoría" />
            <a href="#" className="categoria-link">
              Oficina
            </a>
          </div>
          <div className="categoria">
            <img src="/img/categoria2.jpg" alt="Imagen Categoría" />
            <a href="#" className="categoria-link">
              Hogar
            </a>
          </div>
          <div className="categoria">
            <img src="/img/categoria3.jpg" alt="Imagen Categoría" />
            <a href="#" className="categoria-link">
              Cocina
            </a>
          </div>
        </div>
      </section>

      <section className="sobre-nosotros">
        <div className="contenedor sobre-nosotros-grid">
          <div className="texto-nosotros">
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              voluptatum fugiat numquam sunt error, odit nostrum sed adipisci
              minima ipsum labore asperiores. Assumenda delectus necessitatibus
              iusto, dolore vel quod blanditiis!
            </p>
          </div>
        </div>
      </section>

      <main className="contenido-principal contenedor ">
        <h2 className="text-center">Nuestros Productos</h2>

        <div className="listado-productos">
          <div className="producto">
            <img src="/img/producto1.jpg" alt="Imagen Producto" />
            <div className="texto-producto">
              <h3>Producto 1</h3>
              <p className="descripcion-corta">
                Proin condimentum sodales risus ut aliquet. Nunc eu neque quis
                sapien feugiat posuere sed nec mauris.
              </p>
              <button className="btn-info">Más Información</button>
              <div className="descripcion-adicional">
                <p>
                  Información adicional sobre el producto que se puede mostrar u
                  ocultar.
                </p>
              </div>
            </div>
          </div>

          <div className="producto">
            <img src="/img/producto1.jpg" alt="Imagen Producto" />
            <div className="texto-producto">
              <h3>Producto 2</h3>
              <p className="descripcion-corta">
                Proin condimentum sodales risus ut aliquet. Nunc eu neque quis
                sapien feugiat posuere sed nec mauris.
              </p>
              <button className="btn-info">Más Información</button>
              <div className="descripcion-adicional">
                <p>
                  Información adicional sobre el producto que se puede mostrar u
                  ocultar.
                </p>
              </div>
            </div>
          </div>

          <div className="producto">
            <img src="/img/producto1.jpg" alt="Imagen Producto" />
            <div className="texto-producto">
              <h3>Producto 3</h3>
              <p className="descripcion-corta">
                Proin condimentum sodales risus ut aliquet. Nunc eu neque quis
                sapien feugiat posuere sed nec mauris.
              </p>
              <button className="btn-info">Más Información</button>
              <div className="descripcion-adicional">
                <p>
                  Información adicional sobre el producto que se puede mostrar u
                  ocultar.
                </p>
              </div>
            </div>
          </div>

          <div className="producto">
            <img src="/img/producto1.jpg" alt="Imagen Producto" />
            <div className="texto-producto">
              <h3>Producto 4</h3>
              <p className="descripcion-corta">
                Proin condimentum sodales risus ut aliquet. Nunc eu neque quis
                sapien feugiat posuere sed nec mauris.
              </p>
              <button className="btn-info">Más Información</button>
              <div className="descripcion-adicional">
                <p>
                  Información adicional sobre el producto que se puede mostrar u
                  ocultar.
                </p>
              </div>
            </div>
          </div>

          <div className="producto">
            <img src="/img/producto1.jpg" alt="Imagen Producto" />
            <div className="texto-producto">
              <h3>Producto 5</h3>
              <p className="descripcion-corta">
                Proin condimentum sodales risus ut aliquet. Nunc eu neque quis
                sapien feugiat posuere sed nec mauris.
              </p>
              <button className="btn-info">Más Información</button>
              <div className="descripcion-adicional">
                <p>
                  Información adicional sobre el producto que se puede mostrar u
                  ocultar.
                </p>
              </div>
            </div>
          </div>

          <div className="producto">
            <img src="/img/producto1.jpg" alt="Imagen Producto" />
            <div className="texto-producto">
              <h3>Producto 6</h3>
              <p className="descripcion-corta">
                Proin condimentum sodales risus ut aliquet. Nunc eu neque quis
                sapien feugiat posuere sed nec mauris.
              </p>
              <button className="btn-info">Más Información</button>
              <div className="descripcion-adicional">
                <p>
                  Información adicional sobre el producto que se puede mostrar u
                  ocultar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
