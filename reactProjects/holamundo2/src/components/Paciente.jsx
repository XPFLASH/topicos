export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const handleEliminar = () => {
    console.log('eliminado...', paciente.id)
    const respuesta = confirm('¿Estas seguro de eliminarlo?')
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  }


  return (
    <div className='mt-5 shadow-xl border-2 border-solid border-black  bg-white p-5 rounded-lg uppercase mb-3 text-gray-700 font-bold'>

      <p>Nombre Paciente: <span className='font-normal normal-case'>{paciente.nombre}</span></p>

      <p>Correo: <span className='font-normal normal-case'>{paciente.correo}</span></p>

      <p>Fecha: <span className='font-normal normal-case'>{paciente.fecha}</span></p>

      <p>Sintomas: <span className='font-normal normal-case'>{paciente.sintomas}</span></p>

      <div className="flex justify-evenly gap-4 mt-4">
        <input type="button" value="Editar" className=' bg-blue-500  font-bold  p-2 text-white w-full rounded-md hover:bg-black hover:cursor-pointer' onClick={() => setPaciente(paciente)} />

        <input type="button" value="Eliminar" className='bg-orange-400 font-bold  p-2 text-white w-full rounded-md hover:bg-black hover:cursor-pointer' onClick={handleEliminar} />
      </div>

    </div>
  )
}
