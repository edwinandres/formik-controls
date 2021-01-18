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

    const radioOptions = [
        { key:'Option 1', value:'rOption1' },
        { key:'Option 2', value:'rOption2' },
        { key:'Option 3', value:'rOption3' }
    ]

    const checkboxOptions = [
        { key:'Option 1', value:'cOption1' },
        { key:'Option 2', value:'cOption2' },
        { key:'Option 3', value:'cOption3' }
    ]

    const initialValues = {
        email:'',
        description:'',
        selectOption:'',
        radioOption:'',
        checkboxOption:[],
        birthDate: null

    }
    const validationSchema = Yup.object({
        email: Yup.string().required("Correo es requerido").email("Formato invalido"),
        description: Yup.string().required("La descripcion  es requerida"),
        selectOption: Yup.string().required("La opcion  es requerida"),
        radioOption: Yup.string().required("Requerido"),
        checkboxOption: Yup.array().required("Requerido"),
        birthDate: Yup.date().required("Es requerido").nullable()
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)) )
    }
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
                        label='Seleccione una opcion' 
                        name='selectOption' 
                        options={dropdownOptions}
                    />
                    <FormikControl 
                        control='radio'                         
                        label='Seleccione una opcion' 
                        name='radioOption' 
                        options={radioOptions}
                    />
                    <FormikControl  
                        control='checkbox'
                        label='Opciones checkbox'
                        name='checkboxOption'
                        options={checkboxOptions}
                    />
                    <FormikControl  
                        control='date'
                        label='Seleccione una fecha'
                        name='birthDate'
                        options={checkboxOptions}
                    />
                    <button type='submit'>Enviar</button>
                </Form>
                )
            }
        </Formik>
    )
}

export default FormikContainer
