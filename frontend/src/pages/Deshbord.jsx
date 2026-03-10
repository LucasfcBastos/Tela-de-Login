import { useNavigate } from "react-router-dom"
import "../styles/Deshbord.css"
import Section from '../components/Section'
import Footer from '../components/Footer'

function Deshbord() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/")
  }

  return (
    <div className='Deshbord'>
        <Section />
        <main>

          <h1>Bem vindo {user?.name}</h1>

          <p>Email: {user?.email}</p>

          <button onClick={handleLogout}>
            Sair
          </button>

        </main>
        <Footer />
    </div>
  );
}

export default Deshbord;