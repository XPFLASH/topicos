import React from 'react'
import { Paciente } from './Paciente'


export const Listado = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="bg-[#B6BDDE] my-6 mx-6 p-6 border-4 border-solid border-black rounded-md md:w-1/2 lg:w-3/5 md:14px overflow-y-scroll md:h-screen">

            <h2 className='text-center font-bold text-2xl'>Listado Paciente</h2>
            <p className='mt-5 text-xl'>Administra tus <span className='font-bold'>Pacientes y Citas</span></p>

            {
                pacientes.map(paciente => (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}>

                    </Paciente>
                ))
            }

        </div>
    )
}
