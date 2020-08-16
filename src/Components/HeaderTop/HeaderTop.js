import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderTop.css'

import Logo from '../../Assets/logo_notelix.png'


function HeaderTop() {
    return (
        <div className="header">
            <div className="header-box">
                <div className="header-content">
                    <img alt="Logo" src={Logo} />
                    <p className="phrase">Seu Bloco de Notas para qualquer hora!</p>
                   <Link to="/new-note"><button title="Nova Nota">+</button></Link> 
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;