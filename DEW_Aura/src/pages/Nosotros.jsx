import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Background from "../components/Background";
import Transicion from "../components/Transición";

export const Nosotros = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const buttonClick = () => {
    setVideoVisible(!isVideoVisible);
  };

  return (
    <div>
      <Background />
      <Navbar />
      <main className="contenido-principal contenedor">
        <Transicion />
        <div className="contenido-nosotros">
          <div className="imagen">
            <img src="/img/nosotros.jpg" alt="Imagen nosotros" />
          </div>
          <div className="informacion-nosotros">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              debitis quis consectetur animi beatae mollitia itaque ea dicta
              eos. Totam repellat temporibus autem aspernatur necessitatibus
              perspiciatis ea iste laborum ipsum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              debitis quis consectetur animi beatae mollitia itaque ea dicta
              eos. Totam repellat temporibus autem aspernatur necessitatibus
              perspiciatis ea iste laborum ipsum!
            </p>
          </div>
        </div>

        <div className="video_container">
          <button onClick={buttonClick} className="btn">
            {isVideoVisible ? "Ocultar video" : "Más sobre nosotros"}
          </button>

          {isVideoVisible && (
            <div className="video">
              <iframe
                width="1120"
                height="630"
                src="https://www.youtube.com/embed/afCtix2-BGI?si=GNUC1voZ5rbKiahU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </main>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31195.616463848473!2d-76.96394437165891!3d-12.217640940313967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbdf86cf55fb%3A0xe3f98719d1fabbd4!2sVilla%20EL%20Salvador!5e0!3m2!1ses-419!2spe!4v1725122064468!5m2!1ses-419!2spe"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};
