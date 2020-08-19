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
    console.log(allNotes)
    useEffect(()=>{
      api.get('/notes').then(response =>{
          const allnotes =response.data;
          setAllNotes(allnotes)
          setLoading(false)
          
      },[])
    })
    

    return(
        <div>
            <HeaderTop/>
            <div className="noteboard">
                {Loading ? <div style={{textAlign:'center'}}><p>Carregando...</p></div> : allNotes.map(note=>{
                    return(
                        <Card name="card"
                         key={note.id}
                         title={note.title}
                         text={note.text}
                         noteId={note.id}
                         />
                    )
                })}
                  
            </div>
            
        </div>
    )
}

export default Board