export function RepoItems({response}) {
    return (
      <>
        <li key={response.key}>
          <h2>{response.name}</h2>
          <p>{response.description}</p>
          <a href="/">{response.html_url}</a>
        </li>
      </>
    )
}