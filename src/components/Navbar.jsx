import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)
    console.log(usuario)
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <span className="navbar-brand">
                chat
            </span>
            <div>
                {   
                    usuario.estado ? (
                        <button className='btn btn-outline-danger my-2'
                          onClick={cerrarSesion}  >
                            cerrar session
                        </button>
                    ): (
                        <button className='btn btn-outline-success my-2 mr-2'
                          onClick={ingresoUsuario}  >
                            Acceder
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
