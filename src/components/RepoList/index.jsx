import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./styles"

export function ReposList() {
  return (
    <Container>
      <div>
        <button type="button">
          <FiArrowLeft />
          Voltar
        </button>
      </div>
      <h1>Repositórios de Fábio</h1>

      <ul>
        <li>
          <h2>Nome do repositório</h2>
          <p>Descrição do repositório</p>
          <a href="/">Acessar repositório</a>
        </li>
      </ul>
    </Container>
  )
}
