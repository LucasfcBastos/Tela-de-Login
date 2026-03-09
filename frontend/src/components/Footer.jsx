import Icon from '../assets/svg/Icon.svg?react'

import '../styles/Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className='top'>
                    <Icon className="icon" />
                    <h1> - FURANGO </h1>
                </div>
                <div className='medio'>
                    <div>
                        <p id='title'>Informações: </p>
                        <p>Trabalho Prático de Sistemas Distribuídos</p>
                        <p>7º Período de Engenharia de Software</p>
                    </div>
                    <div>
                        <p id='title'>Entre em contato:</p>
                        <p>Whats: +55 62 9332-8622</p>
                        <p>Insta: @Lucas.bf_gts</p>
                        <p>Linke: lucas-bastos-811a172a7</p>
                    </div>
                </div>
                <div className='bottom'>
                    <p>LUCAS BASTOS FRANCO | Gmail: lucas.software.engineering@gmail.com</p>
                    <p>© 2026 Furango_LBF - Todos os direitos reservados</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;