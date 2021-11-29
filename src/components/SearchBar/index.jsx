import React, { createRef, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { Container } from "./styles"

export function SearchBar({ setUser, setUserRepos }) {
  // const [searchedValue, setSearchedValue] = useState("")

  var input = createRef();

  function getUserData(e) {
    e.preventDefault()
    console.log(`Valor inserido: ${input.current.value}`);
    try {
      fetch(`https://api.github.com/users/${input.current.value}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.login) {
            setUser(data)
          } else {
            setUser(null);
            console.log("usuário não encontrado")
          }
        })

      fetch(`https://api.github.com/users/${input.current.value}/repos`)
        .then((response) => response.json())
        .then((data) => setUserRepos(data))
    } catch (error) {
      
      console.log(error)
    }
    console.log("Sucess fetch!")
  }

  return (
    <Container>
      <h1>Github Explorer</h1>
      <form onSubmit={getUserData}>
        <div>
          <span>github.com</span>
          <input
            type="text"
            value={input.value}
            ref={input}
          />
        </div>
        <button type="submit">
          <FiSearch />
        </button>
      </form>
    </Container>
  )
}
