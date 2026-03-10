import { useState } from "react"
import { api } from "../services/api"
import "../styles/Auth.css"
import "../styles/Forms.css"
import Art from "../components/ImageSlider"

function RegisterPage() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleRegister = async (e) => {

    e.preventDefault()

    try {
      
      await api.post("/auth/register",{
        name,
        email,
        password
      })
  
      alert("Usuário criado")
      window.location.href = "/login"
      
    } catch (err) {

      if (err.response) {
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
              Você está fazendo cadastro
            </h1>
            <p>
              * indica um campo obrigatório
            </p>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Usuario *"
                maxLength={100}
                required
                onChange={e=>setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                onChange={e=>setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha *"
                minLength={8}
                maxLength={100}
                required
                onChange={e=>setPassword(e.target.value)}
              />
              <button type="submit" >
                <p>
                  Cadastrar
                </p>
              </button>
            </form>
            <div>
              <p>
                  Já possui cadastro? <a href="/login">VAMOS LOGAR</a>
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

export default RegisterPage;