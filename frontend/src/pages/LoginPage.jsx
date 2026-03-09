import "../styles/Auth.css"
import "../styles/Forms.css"
import Art from "../components/ImageSlider"

function LoginPage() {
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
            <form>
              <input
                type="Usuario"
                placeholder="Usuario *"
                required
              />
              <input
                type="password"
                placeholder="Senha *"
                required
              />
              <button>
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