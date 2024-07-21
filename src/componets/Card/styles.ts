import styled from "styled-components";
import lightPokeball from '../../assets/light-pokeball.png'

export const Container = styled.article`
  width: 47%;
  height: 8rem;
  background-color: ${props => props.color};
  border-radius: 1rem;
  margin: 0.1rem auto;
  padding: 1rem;
  box-shadow: 0px 15px 10px 5px #E7E9EB;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-image: url(${lightPokeball});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 100px;
  background-clip: border-box;

  img {
    height: 5.5rem;
  }

  @media (min-width: 1024px) {
    width: 18%;
  }
`

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    color: var(--text-white);
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }
`

export const Badge = styled.div`
  font-size: 0.8rem;
  color: var(--text-white);
  text-transform: capitalize;
  padding: 0.2rem 0.5rem;
  border-radius: 50rem;

  background-color: ${props => props.color};
  filter: brightness(1.1);
`
