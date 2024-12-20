import React, { useState } from "react";

export default function ContactView() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con los siguientes datos:", form);
    alert("Formulario enviado correctamente");
    resetForm();
  };

  const resetForm = () => {
    setForm({
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <div id="app" className="d-flex flex-column min-vh-100">
      <div className="container">
        <footer id="contacto" className="d-flex flex-column align-items-center">
          <h1 className="text-center mb-4">Contáctanos</h1>
          <h4 className="text-center mb-4">A través del siguiente formulario</h4>
          <form
            className="form d-flex flex-column mb-3 w-100"
            onSubmit={submitForm}
          >
            <div className="row mb-3">
              <div className="col-6 mb-3">
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="text"
                  name="apellido"
                  value={form.apellido}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Apellido"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Tu Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                className="form-control"
                placeholder="Escribe tu mensaje"
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-center d-none d-lg-flex">
              <button type="submit" className="btn-lg w-50">
                Enviar
              </button>
            </div>
            <div className="d-flex justify-content-center d-lg-none">
              <button type="submit" className="btn-lg w-100">
                Enviar
              </button>
            </div>
          </form>
        </footer>
      </div>
    </div>
  );
}
