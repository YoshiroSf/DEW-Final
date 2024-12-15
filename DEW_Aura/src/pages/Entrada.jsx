import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Background from "../components/Background";

export const Entrada = () => {
  return (
    <div>
      <Background />
      <Navbar />

      <main className="contenido-principal contenedor ">
        <h2 className="text-center">Entrada Blog</h2>

        <article className="entrada contenido-entrada-blog">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id numquam ducimus
              alias commodi eveniet, impedit amet! Quidem et tempore obcaecati vitae voluptatibus
              ipsam? Quae repudiandae sequi quas numquam nam.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae
              fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores
              amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae
              fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores
              amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae
              fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores
              amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae
              fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores
              amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati provident beatae
              fugiat laudantium possimus harum, magnam architecto soluta doloribus itaque dolores
              amet maiores pariatur ea quisquam voluptatem numquam? In, nobis!
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};
