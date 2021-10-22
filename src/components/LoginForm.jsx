import React from 'react';
import Logo from '../assets/img/logoOb2.png';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

    /**Valores iniciales del formulario */
    const initialValues = {
        email: '',
        emailConfirm: '',
        password: '',
        passwordConfirm: ''
    }

    /**Reg expression para validar la contraseña */
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    /**Definición del Esquema Yup */
    const SingupSchema = Yup.object().shape({
        email: Yup.string().email('Email inválido.').required('Campo obligatorio'),
        emailConfirm: Yup.string().oneOf([Yup.ref("email")], "Los emails no coinciden").required('Campo obligatorio'),
        password: Yup.string()
            .min(8, 'La contraseña ha de tener mínimo 8 carácteres.')
            .required('Campo obligatorio')
            .matches(
                passRegex,
                "La contraseña debe contener al menos una letra, un número y un caracter especial."
            ),
        passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "Las contraseñas no coinciden").required('Campo obligatorio')
    });

    return (
        <div className="primary-form col-12 col-lg-4 ">
            <div className="logo mb-4">
                <img src={Logo} alt="Logo Open Bootcamp" />
                <h1>OpenVitae</h1>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={SingupSchema}

                onSubmit={async (values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, handleSubmit, handleChange, handleBlur, touched, errors }) => (
                    <form className="" onSubmit={handleSubmit}>
                        <h4 className="title-form mt-5 mb-4">Regístrate</h4>
                        <div className="form-group mb-4">
                            <label htmlFor="email" className=" mb-2">Email</label>
                            <input
                                type="email"
                                className="form-control" id="email" aria-describedby="emailHelp"
                                placeholder="ejemplo@gmail.com"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />

                            {errors.email && touched.email ? (
                                <div className="error mt-1">{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="emailConfirm" className=" mb-2">Repetir email</label>
                            <input
                                type="email"
                                className="form-control" id="emailConfirm" aria-describedby="emailHelp"
                                placeholder="ejemplo@gmail.com"
                                value={values.emailConfirm}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />

                            {errors.emailConfirm && touched.emailConfirm ? (
                                <div className="error mt-1">{errors.emailConfirm}</div>
                            ) : null}
                        </div>
                        <div className="form-group mb-4 password">
                            <label htmlFor="password" className=" mb-2">Contraseña</label>
                            <div>
                                <input type="password" className="form-control" id="password"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>
                            {errors.password && touched.password ? (
                                <div className="error mt-1">{errors.password}</div>
                            ) : null}
                        </div>
                        <div className="form-group mb-4 password">
                            <label htmlFor="passwordConfirm" className=" mb-2">Repetir contraseña</label>
                            <div>
                                <input type="password" className="form-control" id="passwordConfirm"
                                    value={values.passwordConfirm}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>
                            {errors.passwordConfirm && touched.passwordConfirm ? (
                                <div className="error mt-1">{errors.passwordConfirm}</div>
                            ) : null}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-green">Registrarme</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default LoginForm;
