import asideImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleImg from "../../assets/images/google-icon.svg";

import './styles.scss'

export function Home() {
  return (
    <div id="auth-page">
      <aside>
        <img
          src={asideImg}
          alt="Ilustracao de uma pessoa atras de cards de conversas e respostas representando uma interacao."
        />
        <strong>Crie salas de perguntas e respostas!</strong>
        <p>Tire todas as duvidas rapidao.</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Ilustracao da logomarca do Askingy" />
          <button>
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <button type="submit">Entre na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
