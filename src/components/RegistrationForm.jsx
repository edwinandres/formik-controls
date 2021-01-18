import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function RegistrationForm() {
    const options = [
        { key:'Email', value:'emailmoc' },
        { key: 'Telephone', value:'telephonemoc' }
    ]

    const initialValues = {
        email: '',
        password:'',
        confirmPassword:'',
        modeOfContact:'',
        phone:''
    }

    const validationSchema= Yup.object({
        email: Yup.string().email("Formato invalido").required('Es requerido'),
        password: Yup.string().required('Es requerido'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),''],'Ambos password deben ser iguales').required('Es requerido'),
        modeOfContact: Yup.string().required('Es requerido'),
        phone: Yup.string().when('modeOfContact', {is:'telephonemoc', then: Yup.string().required('Es requerido')})

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
                                name='email'
                                type='email'
                                label='Email'
                            />
                            <FormikControl
                                control='input'
                                name='password'
                                label='Password'
                                type='password'
                            />
                            <FormikControl
                                control='input'
                                name='confirmPassword'
                                label='Confirmar Password'
                                type='password'
                            />
                            <FormikControl
                                control='radio'
                                label='Modo de contacto'
                                name='modeOfContact'
                                options={options}
                            />
                            <FormikControl
                                control='input'
                                type='text'
                                label='Numero de telefono'
                                name='phone'
                            />
                            <button type='submit' disabled={!formik.isValid}>Registrase</button>

                            
                        </Form>
                    )
                }
            }
            
        </Formik>
    )
}

export default RegistrationForm
