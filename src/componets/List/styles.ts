import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2rem 0px;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 90vw;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: var(--text-dark);
  margin: 2rem 1rem;
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  button {
    background-color: var(--button-dark);
    border: none;
    padding: 1rem;
    border-radius: 5px;
    color: var(--text-whitrer);
  }
`