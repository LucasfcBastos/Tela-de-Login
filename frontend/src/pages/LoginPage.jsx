import { useState } from "react"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import "../styles/Auth.css"
import "../styles/Forms.css"
import Art from "../components/ImageSlider"

function LoginPage() {

  const navigate = useNavigate()

  const [name,setName] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response = await api.post("/auth/login",{
        name,
        password
      })

      const { token, user } = response.data

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      navigate("/dashboard")

    } catch (err) {

      if(err.response){
        alert(err.response.data.message)
      } else {
        alert("Erro ao conectar com servidor")
      }

    }

  }


  return (
    <>
      <main className="AuthPage">
        <div className="camp-auth">
          <div className="card-auth">
            <a href="/">← Voltar para home</a>
            <h1>
                Você está fazendo login
            </h1>
            <p>
              * indica um campo obrigatório
            </p>
            <form onSubmit={handleLogin}>
              <input
                type="Usuario"
                placeholder="Usuario *"
                required
                onChange={e=>setName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha *"
                required
                onChange={e=>setPassword(e.target.value)}
              />
              <button type="submit">
                <p>
                  Entrar
                </p>
              </button>
            </form>
            <div>
              <p>
                  Não possui cadastro? <a href="/register">VAMOS CADASTRAR</a>
              </p>
            </div>
          </div>
        </div>
        <div className="camp-img" >
          <Art />
        </div>
      </main>
    </>
  );
}

export default LoginPage;