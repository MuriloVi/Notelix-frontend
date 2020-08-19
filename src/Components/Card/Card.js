import React from 'react'
import './Card.css'
import api from '../../Services/api'

function Card(props) {
 

    async function deleteHandle(){
        const note_ID=  {
            id: props.noteId
        }       
        console.log(props.noteId)
      
        try{
            await api.delete('/notes', note_ID)
        
        }catch{
             alert("erro")
        }
      }


    return (
        <div className="card-box">
            <div className="card-content">
                <h2>{props.title}</h2>
                <h3>{props.text}</h3>
                <h1>{props.noteId}</h1>
                <button className="button" onClick={()=> deleteHandle()}>Deletar</button>
            </div>

        </div>
    )
}

export default Card