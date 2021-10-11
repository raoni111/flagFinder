import styled, { css } from 'styled-components';

// color
import * as color from '../../config/color';

function displayFlex(justifyContent, flexDirection, alignItens) {
  return css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItens};
  `;
}

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${color.VeryDarkBlue};
  @media (max-height: 100vh) {
    height: 100%;
  }
`;
export const Header = styled.header`
  ${displayFlex('space-between', 'row', 'center')}
  width: 100%;
  padding: 1.5rem 7rem;
  background-color: ${color.DarkBlue};
  .header-component-one {
    font-size: 2rem;
    color: ${color.FontColorWhite};
  }
  .header-component-two {
    ${displayFlex('center', 'row', 'center')}
    width: auto;
    color: ${color.FontColorWhite};
    .moonIcon {
      ${displayFlex('center', 'row', 'center')}
    }
    h2 {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
  @media (max-width: 520px) {
    padding: 1rem 4rem;
  }
  @media (max-width: 360px) {
    padding: 1rem 2rem;
  }
`;
export const Article = styled.article`
  padding: 0rem 7rem;
  @media (max-width: 520px) {
    padding: 0rem 4rem;
  }
  @media (max-width: 360px) {
    padding: 0rem 2rem;
  }
`;
export const Nav = styled.nav`
  ${displayFlex('space-between', 'row', 'center')}
  width: 100%;
  margin-top: 4rem;
  .search-content {
    ${displayFlex('center', 'row', 'center')}
    padding: 1.3rem 1rem;
    border-radius: 5px;
    background-color: ${color.DarkBlue};
    .button-search-countries {
      cursor: pointer;
      ${displayFlex('center', 'row', 'center')}
      background-color: transparent;
      .search-icon {
        color: ${color.FontColorWhite};
      }
    }
    input {
      width: 400px;
      margin-left: 1rem;
      font-size: 1.5rem;
      color: ${color.FontColorVaryLigthGray};
      background-color: transparent;
      &::placeholder {
        color: ${color.FontColorVaryLigthGray};
      }
    }
  }
  .select-content {
    .custon-select {
      padding: 1.3rem 1rem;
      outline: none;
      border: none;
      font-size: 1.2rem;
      border-radius: 5px;
      color: ${color.FontColorVaryLigthGray};
      background-color: ${color.DarkBlue};
      .selected {
        display: none;
      }
      option {
        border: none;
      }
      &:after {
        margin-top: 1rem;
      }
    }
  }
  @media (max-width: 760px) {
    ${displayFlex('start', 'column', 'start')}
    .select-content {
      margin-top: 1rem;
    }
  }
  @media (max-width: 580px) {
    .search-content {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;
export const Countries = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 1.5rem 7rem;
  margin-top: 4rem;
  gap: 4rem;
  .countries-card {
    overflow: hidden;
    height: 380px;
    border-radius: 10px;
    background-color: ${color.DarkBlue};
    .flag-conteiner {
      ${displayFlex('start', 'column', 'center')}
      img {
        width: 100%;
        height: 200px !important;
      }
    }
    article {
      ${displayFlex('flex-start', 'column', 'start')}
      padding: 1.7rem;
      h1 {
        color: ${color.FontColorWhite};
        font-size: 2rem;
      }
      div {
        ${displayFlex('flex-start', 'column', 'start')}
        margin-top: 1rem;
        h3 {
          font-size: 1.4rem;
          margin-top: 1rem;
          color: ${color.FontColorVaryLigthGray};
          span {
            color: ${color.FontColorGray};
          }
        }
      }
    }
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 520px) {
    padding: 1.5rem 4rem;
  }
  @media (max-width: 360px) {
    padding: 1.5rem 2rem;
  }
`;
