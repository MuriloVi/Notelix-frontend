import React from 'react'
import {useState, useEffect} from 'react'
import './Board.css'

//components
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import Card from '../../Components/Card/Card'

//code use
import api from '../../Services/api'



function Board(){
    const [allNotes, setAllNotes] = useState([])
    const [Loading, setLoading] =useState(true)
   
    useEffect(()=>{
      api.get('/notes').then(response =>{
          const allnotes =response.data;
          console.log(allnotes)
          setAllNotes(allnotes)
          setLoading(false)
          
      })
    },[])
  
    

    return(
        <div>
            <HeaderTop/>
            <div className="noteboard">
                {Loading ? <div style={{textAlign:'center'}}><p>Carregando...</p></div> : allNotes.length !==0 ? allNotes.map(note=>{
                    return(
                        <Card name="card"
                         key={note.id}
                         title={note.title}
                         text={note.text}
                         noteId={note.id}
                         />
                    )
                }): <div><p style={{color:'indigo',  textAlign:'center', fontFamily:'Lato'}}>Você ainda não possui notas</p></div>}
                  
            </div>
            
        </div>
    )
}

export default Board