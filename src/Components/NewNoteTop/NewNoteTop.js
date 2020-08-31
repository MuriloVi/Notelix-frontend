import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'

import './NewNoteTop.css'

import Logo from '../../Assets/logo_notelix.png'




function NewNoteTop(props) {
    return (
        <div className="topNote">
            <div className="topNote-box">
                <div className="topNote-content">
                    <button onClick={props.HandleArrow} title="Retornar"><AiOutlineArrowLeft/></button>
                    <img alt="Logo" src={Logo} />
                    
                </div>
            </div>
        </div>
    )
}

export default NewNoteTop;