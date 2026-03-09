import "../styles/Auth.css"
import "../styles/Forms.css"
import Art from "../components/ImageSlider"

function RegisterPage() {
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
            <form>
              <input
                type="text"
                placeholder="Usuario *"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                required
              />
              <input
                type="password"
                placeholder="Senha *"
                required
              />
              <button>
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