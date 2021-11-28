import { FiArrowLeft } from "react-icons/fi"
import { RepoItems } from "../RepoItems"
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
          <RepoItems response={response}/>
        ))}
      </ul>
    </Container>
  )
}
