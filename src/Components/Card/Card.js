import React from 'react'
import './Card.css'
import api from '../../Services/api'


function Card(props) {
  
    async function deleteHandle(noteID){
       try{
            await api.delete(`/notes/${noteID}`)  
            alert("Nota Removida")
            document.location.reload()  
        }catch{
             alert("Erro ao remover nota")
        }
      }


    return (
        <div className="card-box">
            <div className="card-content">
                <h2>{props.title}</h2>
                <h3>{props.text}</h3>
                <button className="button" onClick={()=> deleteHandle(props.noteId)}>Deletar</button>
            </div>

        </div>
    )
}

export default Card