import { useNavigate } from "react-router-dom"
import "../styles/Dashboard.css"
import Section from '../components/Section'
import Footer from '../components/Footer'

function Dashboard() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  const handleLogout = () => {

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/")
  }

  return (
    <div className='Dashboard'>
        <Section />
        <main>
          <div className="frame-user">
            <h1>Bem vindo {user?.name}</h1>
            <button style={{ width: "15em" }} onClick={handleLogout}>
              Sair
            </button>
          </div>

        </main>
        <Footer />
    </div>
  );
}

export default Dashboard;