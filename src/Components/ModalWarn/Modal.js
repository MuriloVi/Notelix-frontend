import React from 'react'
import {Link} from 'react-router-dom'
import './Modal.css'

import Logo from '../../Assets/logo_notelix.png'


function Modal() {
    return (
       <div id="modal-full" className="modal-container">
           <div className="modal-box">
            <img src={Logo} alt=""/>
            <h3>Tem certeza?<br/> Se você sair desta página, perderá as alterações </h3>
            <Link to="/"><div id="away"  className="button-box"><p>Sair</p></div></Link>
            <div id="closeit" className="button-box"><p id="closep">Permanecer</p></div>
           </div>

       </div>
    )
}

export default Modal;