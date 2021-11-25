import { useState } from "react";
import { ReposList } from "./components/RepoList";
import { SearchBar } from "./components/SearchBar"
import { User } from "./components/User"
import { GlobalStyle } from "./styles/global"
import { Container } from "./styles/home"

function App() {

  const [user, setUser] = useState();
  const [userRepo, setUserRepos] = useState();


  return (
    <>
      <Container>
        <SearchBar setUser={setUser} setUserRepos={setUserRepos} />
        {user && <User user={user} userRepo={userRepo} />}
        <ReposList />
        <GlobalStyle />
      </Container>
    </>
  )
}

export default App
