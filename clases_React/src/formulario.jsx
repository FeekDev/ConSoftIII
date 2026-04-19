import { useState } from "react";

function RegistroUsuarios() {
    // Definir el estado, creando un objeto que respresenta el formulario
    // cada propiedad se convertira en un input
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        // e.target.name (dinamico de acuerdo al campo) identifica el input que cambio
        // e.target.value valor ingresado por el usuario
        // ...form toma una copia exacta del formulario(sin perdida de datos)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // asociar cada input al estado del formulario
    // el valor lo controla react y el input refleja el estado
    // onChange captura los cambios cada que escribe
    return (
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                    id="nombre"
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    type="text"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    name="email" 
                    value={form.email} 
                    onChange={handleChange}
                    placeholder="Ingresa tu email"
                    type="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input 
                    id="password"
                    name="password" 
                    value={form.password} 
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña"
                    type="password"
                />
            </div>
            <button className="form-button" type="submit">Registrarse</button>
        </form>
    );
}

export default RegistroUsuarios;