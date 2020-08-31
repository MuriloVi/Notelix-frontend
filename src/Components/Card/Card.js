import React from 'react'
import { useState} from 'react'
import './Card.css'
import api from '../../Services/api'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {Link} from 'react-router-dom'



function Card(props) {

    
    const [ invisible, setVisible ] = useState(true)
      

    function showMe(){
        setVisible(!invisible)
    }

    async function deleteHandle(noteID) {
        try {
            await api.delete(`/notes/${noteID}`)
            alert("Nota Removida")
            document.location.reload()
        } catch{
            alert("Erro ao remover nota")
        }
    }

    return (
        <div className="card-box">
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
        </div>
        
            <div className="flex-end">
            <div className={invisible ? 'card-options' :  'visible'}>
                    <ul>
                        <li onClick={() => deleteHandle(props.noteId)}>Excluir</li>
                        <li><Link to ={`/edit-note/${props.noteId}`}>Editar</Link></li>
                    </ul>
                </div>
                    <button title="Opções" className="button" onClick={showMe} ><BsThreeDotsVertical /></button>
                </div>

        </div>
    )
}

export default Card