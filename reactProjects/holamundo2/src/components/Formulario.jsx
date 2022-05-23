import { useState, useEffect } from 'react';

export const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [sintomas, setSintomas] = useState("");
    const [fecha, setFecha] = useState("");

    const [error, setError] = useState(false)


    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            console.log(paciente);
            setNombre(paciente.nombre)
            setCorreo(paciente.correo)
            setSintomas(paciente.sintomas)
            setFecha(paciente.fecha)
        }
    }, [paciente]);

    const generarID = () => {
        const random = Math.random().toString(16).substring(2);
        const fecha = Date.now().toString(36)
        return random + fecha;
    }



    const validarFormulario = (e) => {
        e.preventDefault();

        if ([nombre, correo, sintomas, fecha].includes('')) {
            setError(true);
            return
        }
        //TIP se coloca el error en falso para indicar que todos los campos estan llenos
        setError(false);

        const objetoPaciente = {
            nombre,
            correo,
            sintomas,
            fecha,
            //id: generarID()
        }

        if (paciente.id) {
            //Actualizamos pacientes
            objetoPaciente.id = paciente.id;
            console.log(objetoPaciente);
            console.log(paciente);

            const pacientesActualizado = pacientes.map(remplazo => remplazo.id === paciente.id ? objetoPaciente : remplazo)

            setPacientes(pacientesActualizado);
            setPaciente({});
            //paciente.id = null;



        } else {
            //Agregamos pacientes
            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente])
        }

        limpiarDatos();

    }

    const limpiarDatos = () => {
        setNombre('');
        setCorreo('');
        setSintomas('');
        setFecha('');

    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <form className="bg-[#B6BDDE] p-10 m-10 border-4 border-solid border-black  rounded-md" onSubmit={validarFormulario}>

                {error && <p className="font-bold text-center uppercase mb-2 p-1 bg-[#626FC0] rounded-xl w-full">* Debes llenar todos los campos</p>}

                <h1 className='text-center font-bold uppercase text-xl mb-3 '>Formulario</h1>

                <div className='mb-3'>
                    <div className='mb-3'>
                        <label htmlFor="name" className='text-lg font-semibold'>Nombre Paciente: </label>
                        <input type="text" id='name' placeholder='Escribe tu nombre...' className='w-full p-1 rounded-md mb-[5px]' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='text-lg font-semibold'>Correo: </label>
                        <input type="email" id='email' placeholder='Escribe tu correo...' className='w-full rounded-md p-1 mb-[5px]' value={correo} onChange={(e) => setCorreo(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="sim" className='text-lg font-semibold'>Síntomas: </label>
                        <textarea name="rext" id="sim" cols="30" rows="5" placeholder='Escribe tus sintomas...' className='w-full rounded-md p-1 mb-[5px] ' value={sintomas} onChange={(e) => setSintomas(e.target.value)} ></textarea>
                    </div>
                    <label htmlFor="fecha" className='text-lg font-semibold'>Fecha Cita: </label>
                    <input type="date" id='fecha' placeholder='Selecciona la fecha...' className='w-full p-1 rounded-md mb-[5px]' value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>

                <input type="submit" id='boton' value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} className='bg-[#FFFFFF] text-lg font-medium mt-[5px] hover:bg-[#000000] hover:cursor-pointer w-full hover:text-white rounded-md' />
            </form>
        </div>
    )
}
