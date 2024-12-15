import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Background from "../components/Background";

export const Blog = () => {
  return (
    <div>
      <Background />
      <Navbar />

      <main className="contenido-principal contenedor ">
        <h2 className="text-center">Nuestro Blog</h2>

        <section className="contenedor-blog">
          <div className="blog">
            <article className="entrada">
              <h2>Guía de Colores</h2>

              <div className="imagen">
                <img src="/img/nosotros.jpg" alt="imagen blog" />
              </div>

              <div className="entrada-meta">
                <p>
                  Fecha: <span>22 de Octubre de 2022</span>{" "}
                </p>
                <p>
                  Escrito por: <span>TiendaMuebles</span>{" "}
                </p>
              </div>

              <div className="entrada-blog">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam
                  ducimus alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae
                  voluptatibus ipsam? Quae repudiandae sequi quas numquam nam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident
                  beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque
                  dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
                </p>
              </div>

              <a href="entrada.html" className="btn max-width-30">
                Leer
              </a>
            </article>

            <article className="entrada">
              <h2>Guía de Colores</h2>

              <div className="imagen">
                <img src="/img/nosotros.jpg" alt="imagen blog" />
              </div>

              <div className="entrada-meta">
                <p>
                  Fecha: <span>22 de Octubre de 2022</span>{" "}
                </p>
                <p>
                  Escrito por: <span>TiendaMuebles</span>{" "}
                </p>
              </div>

              <div className="entrada-blog">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam
                  ducimus alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae
                  voluptatibus ipsam? Quae repudiandae sequi quas numquam nam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident
                  beatae fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque
                  dolores amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
                </p>
              </div>

              <a href="entrada.html" className="btn max-width-30">
                Leer
              </a>
            </article>
          </div>

          <aside>
            <h3>Otras Entradas de Blog</h3>
            <ul>
              <li>
                <a href="entrada.html">Guía de Colores</a>
              </li>
              <li>
                <a href="entrada.html">Nuevos Modelos</a>
              </li>
              <li>
                <a href="entrada.html">Guía para diseño de interiores</a>
              </li>
              <li>
                <a href="entrada.html">Guía para diseño de exteriores</a>
              </li>
            </ul>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
};
