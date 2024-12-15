import { useState } from "react";
import { toast } from "react-toastify";
import { isEmpty, isValidEmail } from "../utils/validate.js";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";
import Background from "../components/Background";

const initialState = {
  nombre: "",
  asunto: "",
  email: "",
  tel: "",
  mensaje: "",
  pais: "",
  tipo: "",
  categorias: "",
};

export const Contacto = () => {
  const [form, setForm] = useState(initialState);

  const onChangeInput = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onClickSend = (e) => {
    e.preventDefault();

    if (isEmpty(form.nombre)) return toast.error("El nombre es requerido");

    if (isEmpty(form.email)) return toast.error("El correo es requerido");
    if (!isValidEmail(form.email)) return toast.error("El correo no es válido");

    if (isEmpty(form.tel)) return toast.error("El teléfono es requerido");

    if (isEmpty(form.mensaje)) return toast.error("El mensaje es requerido");

    if (isEmpty(form.pais)) return toast.error("El país es requerido");

    toast.success("Formulario enviado correctamente.");
    setTimeout(() => {
      clearForm();
    }, 3000);
  };

  const clearForm = () => {
    setForm(initialState);
  };

  return (
    <div>
      <Background />
      <Navbar />
      <main className="contenido-principal contenedor ">
        <h2 className="text-center">Contacto</h2>

        <form className="formulario" onSubmit={onClickSend} noValidate>
          <fieldset>
            <legend>Tus Datos</legend>

            <div className="campo">
              <label htmlFor="nombre">Nombre: </label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu Nombre"
                name="nombre"
                value={form.nombre}
                onChange={onChangeInput}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="asunto">Asunto:</label>
              <input
                id="asunto"
                type="text"
                placeholder="Tu Asunto"
                name="asunto"
                value={form.asunto}
                onChange={onChangeInput}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                type="email"
                placeholder="Tu Email"
                name="email"
                value={form.email}
                onChange={onChangeInput}
              />
            </div>

            <div className="campo">
              <label htmlFor="tel">Teléfono:</label>
              <input
                id="tel"
                type="tel"
                placeholder="Tu Teléfono"
                name="tel"
                value={form.tel}
                onChange={onChangeInput}
              />
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                rows="10"
                cols="20"
                name="mensaje"
                value={form.mensaje}
                onChange={onChangeInput}
              ></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>País</legend>

            <div className="campo">
              <label htmlFor="pais">País</label>
              <select
                id="pais"
                name="pais"
                value={form.pais}
                onChange={onChangeInput}
              >
                <option value="">-- Seleccione -- </option>
                <option value="MX">México</option>
                <option value="PR">Perú</option>
                <option value="CO">Colombia</option>
                <option value="AR">Argentina</option>
                <option value="ES">España</option>
                <option value="CL">Chile</option>
              </select>
            </div>
          </fieldset>

          <fieldset>
            <legend>Información Extra</legend>

            <div className="campo">
              <label htmlFor="cliente">Cliente</label>
              <input
                id="cliente"
                type="radio"
                name="tipo"
                value="cliente"
                checked={form.tipo === "cliente"}
                onChange={onChangeInput}
              />
            </div>

            <div className="campo">
              <label htmlFor="proveedor">Proveedor</label>
              <input
                id="proveedor"
                type="radio"
                name="tipo"
                value="proveedor"
                checked={form.tipo === "proveedor"}
                onChange={onChangeInput}
              />
            </div>

            <div className="campo">
              <label htmlFor="categoria">Categoría de Interés</label>
              <input
                list="categorias"
                name="categorias"
                value={form.categorias}
                onChange={onChangeInput}
              />
              <datalist id="categorias">
                <option value="Cocina" />
                <option value="Exterior" />
                <option value="Recamaras" />
                <option value="Oficina" />
                <option value="Televisión" />
              </datalist>
            </div>
          </fieldset>

          <input className="btn" type="submit" value="Enviar Formulario" />
        </form>
      </main>

      <Footer />
    </div>
  );
};
