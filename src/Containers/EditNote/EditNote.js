import React, { useEffect, useState } from 'react'


//components
import NewNoteTop from '../../Components/NewNoteTop/NewNoteTop'
import TextField from '@material-ui/core/TextField'

//code use
import api from '../../Services/api'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useParams, useHistory } from 'react-router-dom'


function EditNote() {

    const validationForm = yup.object().shape({
        title: yup.string().required("Insira um título"),
        text: yup.string().max(250, "Limite máximo de caracteres atingido").required("Insira uma Nota")

    })
    let { id } = useParams()
    const history = useHistory()
    const [notexTitle, setNotitle] = useState()
    const [notexText, setNotex] = useState()
   


    useEffect(() => {
        api.get(`/notes/${id}`).then(async response => {
            let notelixer = await response.data[0]
            setNotex(notelixer.text)
            setNotitle(notelixer.title)            
        })
    }, [id])


    function HandleForm(form) {
        let sendForm = {
            title: form.title,
            text: form.text
        }
        api.put(`/notes/${id}`, sendForm).then(() => {
            alert('Nota Atualizada!')
            history.push('/')
        }).catch(() => {
            alert('Erro ao atualizar nota, tente novamente')
        })
    }
    return (
        <div>
            <NewNoteTop />
            <div className="formboard">
                <h1>Editar Nota</h1>
                <div className="form-box">
                    <Formik
                        enableReinitialize
                        initialValues={{
                            title: notexText,
                            text: notexTitle
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
                                <button type="submit">Atualizar</button>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default EditNote;