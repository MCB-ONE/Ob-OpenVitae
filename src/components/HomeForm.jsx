import React from 'react'
import Logo from '../assets/img/logoOb2.png';

const HomeForm = () => {
    return (
        <div className="primary-form col-12 col-lg-4 order-2">
            <div className="logo mb-4">
                <img src={Logo} alt="Logo Open Bootcamp" />
                <h1>OpenVitae</h1>
            </div>
            <form>
                <div className="form-group mb-4">
                    <label htmlFor="exampleInputEmail1" className=" mb-2">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-4 password">
                    <label htmlFor="exampleInputPassword1" className=" mb-2">Contraseña</label>
                    <div>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </div>

                </div>
                <div className="form-check">
                    <div>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
                    </div>
                    <div className="info">
                        <p className="text-green">¿Has olvidado la contraseña?</p>
                    </div>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-green">Inciar session</button>
                </div>
                <div className="info mt-3 text-center">
                        <p className="">¿Aún no tienes cuenta?<a href="#" className="link-light ms-2">Registrate aqui</a></p>
                </div>
            </form>
        </div>
    )
}

export default HomeForm
