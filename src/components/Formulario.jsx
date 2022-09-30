import "../assets/style/formulario.css"
function Formulario() {
    return ( 
        <form action="" method="post">
            <ul>
                <li>
                    <label >Nombre del Alumno</label>
                    <input type="text" id="nombre" name="nombreAlumno"></input>
                </li>
                <li>
                    <label > correo electronico </label>
                    <input type="number" id="correo" name="correoAlumno"></input>
                </li>
                <li>
                    <label > Salon </label>
                    <input type="text" id="salon" name="SalonAlumno"></input>
                </li>
                <li>
                    <label > Grupo </label>
                    <input type="number" id="matricula" name="GradoAlumno"></input>
                </li>
                <li>
                    <label>Titulo del libro</label>
                    <input type="text" id="titulo" name="tituloLibro"></input>
                </li>
                <li>
                    <label htmlFor="autor">Autor del libro</label>
                    <input type="text" id="autor" name="autorLibro"></input>
                </li>
                <li>
                    <label>Fecha de renta</label>
                    <input type="date" id="fecha" name="fechaRenta"></input>
                </li>
                <li>
                    <label >Fecha de devolucion</label>
                    <input type="date" id="fechaDev" name="fechaDevolucion"></input>
                </li>
                <li className="button">
                    <button type="summit">Enviar</button>
                </li>
               
            </ul>
        </form>
     );
}

export default Formulario;