import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {

    const dropdownOptions=[
        {key:'Seleccione una opcion', value:''},
        {key:'Opcion 1', value:'option1'},
        {key:'Opcion 2', value:'option2'},
        {key:'Opcion 3', value:'option3'}
    ]

    const initialValues = {
        email:'',
        description:'',
        selectOption:''

    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Correo es requerido").email("Formato invalido"),
        description: Yup.string().required("La descripcion  es requerida"),
        selectOption: Yup.string().required("La opcion  es requerida")

    })
    const onSubmit = values => console.log('Form data', values)
    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl 
                        control='input' 
                        type='email' 
                        label='Email' 
                        name='email' 
                    />
                    <FormikControl 
                        control='textarea' 
                        type='email' 
                        label='Descripcion' 
                        name='description' 
                    />
                    <FormikControl 
                        control='select' 
                        //type='email' 
                        label='Seleccione una opcion' 
                        name='selectOption' 
                        options={dropdownOptions}
                    />
                    <button type='submit'>Enviar</button>
                </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer
