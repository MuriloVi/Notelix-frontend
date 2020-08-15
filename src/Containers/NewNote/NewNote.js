import React from 'react'
import './NewNote.css'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

//components
import NewNoteTop from '../../Components/NewNoteTop/NewNoteTop'
import TextField from '@material-ui/core/TextField'

//code use
import api from '../../Services/api'


function NewNote() {
    
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
   function HandleForm(e){
       e.preventDefault()
       api.post('/notes', {
           title,
           text
       }).then(()=>{
           alert('Nota Criada!')
           history.push('/')
       }).catch(()=>{
         alert('Erro ao criar nota, tente novamente')
       })
       console.log(
           title,
           text
       )
       setText('')
       setTitle('')
      
   }
    return (
        <div>
            <NewNoteTop />
            <div className="formboard">
                <h1>Nova Nota</h1>
                <div className="form-box">
                   <form onSubmit={HandleForm}>
                   <TextField onChange={e => setTitle(e.target.value)} value={title} label="Título" variant="outlined"  />
                    <TextField onChange={e => setText(e.target.value)} value={text} label="Nota" variant="outlined" multiline rows={5}  />
                    <div style={{textAlign:"center"}}>
                        <button type="submit">Criar Nota</button>
                    </div>
                   </form>
                 
                </div>
            </div>
        </div>
    )
}

export default NewNote;