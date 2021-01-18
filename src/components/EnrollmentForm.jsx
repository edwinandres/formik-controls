import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'




function EnrollmentForm() {

    const dropdownOptions = [
        { key:'Seleccione su curso', value:'' },
        { key: 'React', value:'react' },
        { key:'Angular', value:'angular' },
        { key: 'Vue', value:'vue' }
    ]

    const checkboxOptions = [        
        { key: 'HTML', value:'html' },
        { key:'CSS', value:'css' },
        { key: 'JavaScript', value:'javascript' }
    ]

    const initialValues={
        email:'',
        bio:'',
        course:'',
        skills:[],
        courseDate:null
    }

    const validationSchema= Yup.object({
        email: Yup.string().required('Es requerido').email('Formato invalido'),
        bio: Yup.string().required('Es requerido'),
        course: Yup.string().required('Es requerido'),
        courseDate: Yup.string().required('Es requerido')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return(
                        <Form>
                            <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='textarea'
                                label='Bio'
                                name='bio'
                            />
                            <FormikControl
                                control='select'
                                label='Curso'
                                name='course'
                                options={dropdownOptions}
                            />
                            <FormikControl
                                control='checkbox'
                                label='Sus habilidades'
                                name='skills'
                                options={checkboxOptions}
                            />
                            <FormikControl
                                control='date'
                                label='Course date'
                                name='courseDate'
                            />
                            <button type='submit' disabled={!formik.isValid}>Enviar</button>
                        </Form>
                    )
                }
            }
            
        </Formik>
    )
}

export default EnrollmentForm
