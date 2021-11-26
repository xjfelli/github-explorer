import { useState } from "react"
import { ReposList } from "./components/RepoList"
import { SearchBar } from "./components/SearchBar"
import { User } from "./components/User"
import { GlobalStyle } from "./styles/global"
import { Container } from "./styles/home"

function App() {
  const [user, setUser] = useState()
  const [userRepo, setUserRepos] = useState()
  const [isReposListActive, setIsReposListActive] = useState(false)

  return (
    <>
      <Container>
        <SearchBar setUser={setUser} setUserRepos={setUserRepos} />

        {isReposListActive
          ? userRepo && (
              <ReposList
                user={user}
                userRepo={userRepo}
                setIsReposListActive={setIsReposListActive}
              />
            )
          : user && (
              <User
                user={user}
                userRepo={userRepo}
                setIsReposListActive={setIsReposListActive}
              />
            )}

        <GlobalStyle />
      </Container>
    </>
  )
}

export default App
