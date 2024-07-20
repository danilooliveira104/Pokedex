import styled from "styled-components";
import background_button from '../../assets/background-button.jpg'

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;

  button {
    width: 100px;
    height: 40px;
    border: none;
    padding: 0.5rem;
    border-radius: 50px;
    color: var(--text-dark);
    background-color: transparent;
    font-weight: 600;
  }
`