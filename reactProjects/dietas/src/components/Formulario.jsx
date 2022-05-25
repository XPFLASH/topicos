import { useState, useEffect } from 'react';

export const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState("");
    const [genero, setGenero] = useState("");
    const [talla, setTalla] = useState("");
    const [peso, setPeso] = useState("");
    const [estatura, setEstatura] = useState("");
    const [edad, setEdad] = useState("");
    const [actividad, setActividad] = useState("");

    const [error, setError] = useState(false)


    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            console.log(paciente);
            setNombre(paciente.nombre)
            setTalla(paciente.talla)
            setPeso(paciente.peso)
            setEstatura(paciente.estatura)
        }
    }, [paciente]);

    const generarID = () => {
        const random = Math.random().toString(16).substring(2);
        const fecha = Date.now().toString(36)
        return random + fecha;
    }



    const validarFormulario = (e) => {
        e.preventDefault();

        if ([nombre, talla, peso, estatura].includes('')) {
            setError(true);
            return
        }
        //TIP se coloca el error en falso para indicar que todos los campos estan llenos
        setError(false);

        const objetoPaciente = {
            nombre,
            talla,
            peso,
            estatura,
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
        setTalla('');
        setPeso('');
        setEstatura('');

    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <form className="bg-[#B6BDDE] p-6 m-6 border-4 border-solid border-black  rounded-md" onSubmit={validarFormulario}>


                {error && <p className="font-bold text-center uppercase mb-2 p-1 bg-[#626FC0] rounded-xl w-full">* Debes llenar todos los campos</p>}

                <h1 className='text-center font-bold text-2xl  mb-3 '>Datos del Paciente</h1>
                <p className='mt-5 text-xl'><span className='font-bold'>Ingresa</span> la información correspondiente</p>

                <div className='mb-3'>
                    <div className='mb-3'>
                        <label htmlFor="name" className='text-lg font-semibold'>Nombre Paciente: </label>
                        <input type="text" id='name' placeholder='Escribe tu nombre...' className='w-full p-1 rounded-md mb-[5px]' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="genero" className='text-lg font-semibold'>Genero: </label>
                        <div className='flex justify-center'>
                            <div className='form-check form-check-inline'>
                                <input type="radio" name="genero" id="h" value={1} />
                                <label className="inline-block text-black ml-2 mr-2 text-lg font-semibold" for="h"> Masculino</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" name="genero" id="m" value={2} />
                                <label className="inline-block text-black ml-2 text-lg font-semibold" for="h"> Femenino</label>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="talla" className='text-lg font-semibold'>Talla en Cm: </label>
                        <input type="text" id='talla' placeholder='Escribe tu talla (Cm)...' className='w-full p-1 rounded-md mb-[5px]' value={talla} onChange={(e) => setTalla(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="peso" className='text-lg font-semibold'>Peso en Kg: </label>
                        <input type="text" id='peso' placeholder='Escribe tu peso (Kg)...' className='w-full p-1 rounded-md mb-[5px]' value={peso} onChange={(e) => setPeso(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="estatura" className='text-lg font-semibold'>Estarura: </label>
                        <input type="text" id='estatura' placeholder='Escribe tu estatura...' className='w-full p-1 rounded-md mb-[5px]' value={estatura} onChange={(e) => setEstatura(e.target.value)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="age" className='text-lg font-semibold'>Edad: </label>
                        <input type="text" id='age' placeholder='Escribe tu edad...' className='w-full p-1 rounded-md mb-[5px]' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="factAct" className='text-lg font-semibold'>Factor Actividad: </label>
                        <fieldset>
                            <select name="FactorActividad" id="FactAct">
                                <option value="sedentario">Sedentario</option>
                                <option value="ligero">Ligero</option>
                                <option value="moderado">Moderado</option>
                                <option value="activo">Activo</option>
                                <option value="vigoroso">Vigoroso</option>
                            </select>
                        </fieldset>
                    </div>
                </div>

                <input type="submit" id='boton' value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} className='bg-[#FFFFFF] text-lg font-medium mt-[5px] hover:bg-[#000000] hover:cursor-pointer w-full hover:text-white rounded-md' />
            </form>
        </div>
    )
}
