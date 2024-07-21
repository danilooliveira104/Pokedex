import styled from "styled-components";
import lightPokeball from '../../assets/light-pokeball.png'

export const Container = styled.article`
  width: 47%;
  height: 8rem;
  background-color: ${props => props.color};
  border-radius: 1rem;
  margin: 0.1rem auto;
  padding: 1rem;

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

  @media (min-width: 850px) {
    width: 30%;
  }

  @media (min-width: 1250px) {
    width: 18%;
  }

  &:hover {
  cursor: pointer;
    img {
      height: 6.5rem;
      transition: 0.25s;
    }
    @media (max-width: 850px) {
      img {
        height: 6.0rem;
      }
    }
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
