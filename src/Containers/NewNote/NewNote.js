import React from 'react'
import './NewNote.css'
import { useHistory } from 'react-router-dom'

//components
import NewNoteTop from '../../Components/NewNoteTop/NewNoteTop'
import TextField from '@material-ui/core/TextField'

//code use
import api from '../../Services/api'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from "formik";


function NewNote() {

    const validationForm = yup.object().shape({
        title: yup.string().required("Insira um título"),
        text: yup.string().max(350, "Limite máximo de caracteres atingido").required("Insira uma Nota")

    })

    const history = useHistory()

    function HandleForm(form) {
        let sendForm = {
            title: form.title,
            text: form.text
        }
        api.post('/notes', sendForm).then(() => {
            alert('Nota Criada!')
            history.push('/')
        }).catch(() => {
            alert('Erro ao criar nota, tente novamente')
        })
    }
    return (
        <div>
            <NewNoteTop />
            <div className="formboard">
                <h1>Nova Nota</h1>
                <div className="form-box">
                    <Formik
                        initialValues={{
                            title: "",
                            text: ""
                        }}
                        onSubmit={HandleForm}
                        validationSchema={validationForm}
                    >
                        <Form>
                            <Field
                                placeholder="Título"
                                name="title"
                                children={({ field }) => {
                                    return (
                                        <TextField
                                            {...field}
                                            label="Título"
                                            variant="outlined"
                                        />
                                    )
                                }}
                            />
                            <ErrorMessage
                                className="err-form"
                                component="span"
                                name="title"
                            />
                            <Field
                                placeholder="Nota"
                                name="text"
                                children={({ field }) => {
                                    return (
                                        <TextField
                                            {...field}
                                            label="Nota"
                                            variant="outlined"
                                            multiline
                                            rows={5}
                                        />
                                    )
                                }}
                            />
                            <ErrorMessage
                                className="err-form"
                                component="span"
                                name="text"
                            />
                            <div style={{ textAlign: "center" }}>
                                <button type="submit">Criar Nota</button>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default NewNote;