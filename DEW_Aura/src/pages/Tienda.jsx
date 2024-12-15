import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Background from "../components/Background"

export const Tienda = () => {
  return (
    <div>
      <Background />
      <Navbar />
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
