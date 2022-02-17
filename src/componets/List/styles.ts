import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2rem 0px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`


export const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: var(--text-dark);
  margin: 2rem 1rem;
`