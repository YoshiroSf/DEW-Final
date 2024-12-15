import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Background from "../components/Background";

export const Galeria = () => {
  return (
    <div>
      <Background />
      <Navbar />

      <main className="contenido-principal contenedor ">
        <h2 className="text-center">Galería</h2>

        <ul className="galeria">
          <li>
            <a href="/img/galeria_01.jpg">
              <img src="/img/galeria_01.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_02.jpg">
              <img src="/img/galeria_02.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_03.jpg">
              <img src="/img/galeria_03.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_04.jpg">
              <img src="/img/galeria_04.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_05.jpg">
              <img src="/img/galeria_05.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_06.jpg">
              <img src="/img/galeria_06.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_07.jpg">
              <img src="/img/galeria_07.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_08.jpg">
              <img src="/img/galeria_08.jpg" alt="imagen galeria" />
            </a>
          </li>

          <li>
            <a href="/img/galeria_09.jpg">
              <img src="/img/galeria_09.jpg" alt="imagen galeria" />
            </a>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
};
