import React from "react";
import { useEffect, useRef, useState } from "react";

export const Carrusel = () => {
  const [f, setF] = useState(0);
  const fondo = [
    "/img/principal.jpg",
    "/img/principal2.jpg",
    "/img/principal3.jpg",
  ];
  const imgRef = useRef(null);

  useEffect(() => {
    const rotacion = () => {
      if (imgRef.current) {
        imgRef.current.src = fondo[f];
      }
      setF((prevF) => (prevF + 1) % fondo.length);
    };

    const intervalId = setInterval(rotacion, 3000);

    return () => clearInterval(intervalId);
  }, [f]);

  useEffect(() => {
    const links = document.querySelectorAll(".categoria-link");

    links.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.classList.add("hovered");
      });

      link.addEventListener("mouseout", function () {
        link.classList.remove("hovered");
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseover", function () {
          link.classList.add("hovered");
        });

        link.removeEventListener("mouseout", function () {
          link.classList.remove("hovered");
        });
      });
    };
  }, []);

  useEffect(() => {
    const botonesInfo = document.querySelectorAll(".btn-info");

    botonesInfo.forEach((boton) => {
      boton.addEventListener("click", function () {
        const descripcionAdicional = this.nextElementSibling;
        if (
          descripcionAdicional.style.display === "none" ||
          descripcionAdicional.style.display === ""
        ) {
          descripcionAdicional.style.display = "block";
          this.textContent = "Ocultar Información";
        } else {
          descripcionAdicional.style.display = "none";
          this.textContent = "Más Información";
        }
      });
    });

    return () => {
      botonesInfo.forEach((boton) => {
        boton.removeEventListener("click", function () {});
      });
    };
  }, []);
  return (
    <div>
      <div className="carousel">
        <img id="fondo-carousel" ref={imgRef} src="/img/principal.jpg" alt="" />
      </div>
    </div>
  );
};
