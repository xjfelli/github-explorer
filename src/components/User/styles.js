import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--shape);
  border-radius: 10px;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: 4px solid var(--blue);
  }

  h1 {
    font-size: 2rem;
    color: var(--text);
  }

  h2 {
    font-size: 1rem;
    color: var(--text-secondary);
  }

  p {
    margin: 10px 0;
    font-size: 1rem;
    text-align: justify;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div,
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      transition: background-color 0.4s ease;
      border-radius: 10px;

      &:hover {
        background-color: var(--shape-light);
        user-select: none;
      }

      strong {
        font-size: 1.5rem;
        color: var(--text);
      }

      span {
        font-size: 0.8rem;
        color: var(--text-secondary);
      }
    }
  }
`
