import Icon from '../assets/svg/Icon.svg?react'
import Btn from '../components/Button'
import Footer from '../components/Footer'

import '../styles/LandingPage.css'

function LandingPage() {
  return (
    <div className="LandingPage">
      <section>
        <p>PlayTest - Login</p>
        <Icon className="icon" />
      </section>
      <main>
        <div className='camp'>
          <h1>Escolha um para pode proseguir</h1>
          <div className='btns'>
            <Btn text="Login" url="/login" />
            <Btn text="Cadastro" url="/register" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;