import { FiArrowLeft } from "react-icons/fi"
import { Container } from "./styles"

export function ReposList({ user, userRepo, setIsReposListActive }) {
  return (
    <Container>
      <div>
        <button type="button" onClick={() => setIsReposListActive(false)}>
          <FiArrowLeft />
          Voltar
        </button>
        <h1>Repositórios de {user.name}</h1>
      </div>

      <ul>
        {userRepo.map((response) => (
          <li key={response.key}>
            <h2>{response.name}</h2>
            <p>{response.description}</p>
            <a href="/">{response.html_url}</a>
          </li>
        ))}
      </ul>
    </Container>
  )
}
