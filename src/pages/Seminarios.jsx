import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalLive } from '../components/ModalLive';

export const Seminarios = () => {
    const btnLive = (param) => {
        const chat = document.querySelector("#chat"),
            deta = document.querySelector("#deta"),
            promo = document.querySelector("#promo"),
            btnChat = document.querySelector("#btnChat"),
            btnDeta = document.querySelector("#btnDeta"),
            btnPromo = document.querySelector("#btnPromo")
        if (param === "chat") {
            deta.classList.add("d-none")
            chat.classList.remove("d-none")
            promo.classList.add("d-none")
            btnChat.classList.add("activate")
            btnDeta.classList.remove("activate")
            btnPromo.classList.remove("activate")
        } else if (param === "deta") {
            chat.classList.add("d-none")
            deta.classList.remove("d-none")
            promo.classList.add("d-none")
            btnChat.classList.remove("activate")
            btnPromo.classList.remove("activate")
            btnDeta.classList.add("activate")
        } else {
            chat.classList.add("d-none")
            deta.classList.add("d-none")
            promo.classList.remove("d-none")
            btnPromo.classList.add("activate")
            btnChat.classList.remove("activate")
            btnDeta.classList.remove("activate")
        }
    }
    return (
        <>
            <Container fluid>
                <Row style={{ height: "calc(100vh - 76.72px)" }}>
                    <Col xl={9} sm={12} className="p-0 color text-dark" id="panTotal">
                        <iframe height="630" src="https://www.youtube.com/embed/ql9-82oV2JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='w-100 video'></iframe>
                        <div className='pt-2 ps-4 pe-4 ocultar'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='caja-camara rounded'>
                                    <img src="/img/icons/camara.png" alt="" className='' />
                                </div>
                                <h5 className='text-white w-50 p-0 m-0'>Bases Para la Formulacion De las Politicas Publicas y su implicancia en el SIAF, SIGA Y SEACE 3.0</h5>
                                <div className='d-flex align-items-center'>
                                    <div className='bg-white' style={{width: "2px", height:"20px"}}></div>
                                    <img src="/img/icons/Grupo 327.svg" alt="" className='ms-3'/>
                                    <p className='text-white p-0 m-0 ms-3 fw-bold'>230</p>
                                </div>
                                <div className='d-flex align-items-center pt-3 py-3 ps-4 px-4 rounded' style={{backgroundColor: "#192677"}}>
                                    <img src="/img/icons/calendar.png" alt="" />
                                    <p className='text-white p-0 m-0 ps-3 fw-bold'>24 Junio | 7:00 PM</p>
                                </div>
                                <div>
                                    <button className='bg-white p-3 rounded text-primary fw-bold'>Compartir <img src="/img/icons/compartir.png" alt="" /></button>
                                </div>

                            </div>
                            <div style={{borderTop: "3px solid #14206B"}} className="mt-4">
                                <h5 className='text-white mt-2'>Unete a nuestros grupos y sigue los seminarios</h5>
                                <div>
                                    <button className='btn btn-success fw-bold'>Grupo Whatsapp</button>
                                    <button className='btn btn-primary fw-bold ms-3'>Grupo Telegram</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={3} sm={12} className="color-live p-0" id="panTotal">
                        <div>
                            <div className='d-flex mt-3'>
                                <button className='cajas-live ms-1 p-3 activate' onClick={() => btnLive("chat")} id="btnChat"><img src="/img/icons/chat.png" alt="" className='d-block mx-auto' /><p className='text-white fw-bolder'>Chat en Vivo</p></button>
                                <button className='cajas-live ms-1 p-3' onClick={() => btnLive("deta")} id="btnDeta"><img src="/img/icons/detalles.png" alt="" className='d-block mx-auto' /><p className='text-white fw-bolder'>Detalles</p></button>
                                <button className='cajas-live ms-1 p-3' onClick={() => btnLive("promo")} id="btnPromo"><img src="/img/icons/promo.png" alt="" className='d-block mx-auto' /><p className='text-white fw-bolder'>Promocion</p></button>
                            </div>
                        </div>
                        <div className='text-white'>
                            <div id="chat" className='d-block res'>

                            </div>
                            <div id="deta" className='d-none p-4 res'>
                                <h4 style={{ color: "#3C86F4" }} className="fw-bold">Tema del Seminario</h4>
                                <p className='fw-bold fs-5'>Bases Para la Formulacion De las Politicas Publicas y su implicancia en el SIAF, SIGA Y SEACE 3.0</p>
                                <h4 style={{ color: "#3C86F4" }}>Horario</h4>
                                <div className='bg-white text-dark p-2 w-50 rounded'>
                                    24 Julio | 7:00 pm
                                </div>
                                <h4 style={{ color: "#3C86F4" }} className="mt-3">¿Quien es el docente?</h4>
                                <div className='bg-white text-dark p-2 w-50 rounded'>
                                    C.P.C Juan Carlos Alvarado
                                </div>
                                <p className='text-white mt-5'>Especialista en Gestión Pública, Presupuesto por Resultados y Mejora de Procesos en Administración Pública. Capacitador en Programas de Especialización en Sistemas de Gestión Pública, Sistema Integrado de Administración Financiera SIAF, Gestión de Presupuesto Público, Sistema de Contabilidad Gubernamental, Gestión de Tesorería y Finanzas Publicas. Experto en Análisis, Integración y Cierre Financiero y Presupuestal aplicado al SIAF. Especialista en la conducción de los Procesos Presupuestarios en el Sector Publico. Más de 18 años de experiencia en manejo de procedimientos administrativos, instrumentos de gestión pública, planeamiento estratégico, y presupuesto participativo para Gobierno Locales.</p>
                            </div>
                            <div id="promo" className='d-none p-4 res'>
                                <img src="/img/promo.jpg" alt="" className='rounded' style={{ width: "100%" }} />
                                <h5 className='text-center mt-3'>Estamos en Linea 😃</h5>
                                <button className='btn btn-success w-100 p-2 fs-4 fw-bold'><i class="fa fa-whatsapp" aria-hidden="true"></i> 933179895</button>
                                <ModalLive />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}