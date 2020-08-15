import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import './NewNoteTop.css'

import Logo from '../../Assets/logo_notelix.png'




function NewNoteTop() {
    return (
        <div className="topNote">
            <div className="topNote-box">
                <div className="topNote-content">
                    <Link to="/"><button title="Retornar"><AiOutlineArrowLeft/></button></Link> 
                    <img alt="Logo" src={Logo} />
                    
                </div>
            </div>
        </div>
    )
}

export default NewNoteTop;