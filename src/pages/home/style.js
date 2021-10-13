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
  position: relative;
  box-shadow: 0px 5px 3px hsl(210, 24%, 13%);
  ${displayFlex('space-between', 'row', 'center')}
  width: 100%;
  padding: 2rem 7rem;
  background-color: ${color.DarkBlue};
  transition: all 0.5s ease-in-out;
  z-index: 3;
  &.open-details {
    position: fixed;
    top: 0px;
  }
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
export const CountryDetail = styled.article`
  position: fixed;
  overflow: hidden;
  top: 0px;
  width: 100%;
  height: 0vh;
  padding: 0rem 5rem;
  background-color: ${color.VeryDarkBlue};
  z-index: 2;
  &.open-details {
    height: 100vh;
  }
  .back-button-conteiner {
    margin: 11rem 0 5rem 0;
    button {
      ${displayFlex('center', 'row', 'center')}
      width: 12rem;
      height: 4rem;
      font-size: 1.7rem;
      border-radius: 5px;
      box-shadow: 0px 0px 10px hsl(210, 24%, 13%);
      color: ${color.FontColorWhite};
      background-color: ${color.DarkBlue};
      .back-arrow {
        margin-right: 1rem;
        color: ${color.FontColorWhite};
      }
    }
  }
  .conteiner-coutrie-details {
    ${displayFlex('start', 'row', 'start')}
    color: ${color.FontColorWhite};
    .countrie-flag {
      margin-right: 5rem;
      img {
        width: 400px;
        height: 250px;
      }
    }
    .countrie-details {
      padding: 2rem;
      .common-name {
        font-size: 2.7rem;
      }
      .grid-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          'content1 content6'
          'content2 content7'
          'content3 content8'
          'content4 conrent4'
          'content5 content5';
        width: 900px;
        margin-top: 2rem;
        div {
          margin-top: 0.5rem;
          h1 {
            font-size: 1.6rem;
            color: ${color.FontColorVaryLigthGray};
            span {
              margin-left: 1rem;
              color: ${color.FontColorGray};
            }
          }
        }
        div:nth-child(1) {
          grid-area: content1;
        }
        div:nth-child(2) {
          grid-area: content2;
        }
        div:nth-child(3) {
          grid-area: content3;
        }
        div:nth-child(4) {
          grid-area: content4;
        }
        div:nth-child(5) {
          grid-area: content5;
        }
        div:nth-child(6) {
          grid-area: content6;
        }
        div:nth-child(7) {
          grid-area: content7;
        }
        div:nth-child(8) {
          grid-area: content8;
        }
      }
    }
  }
`;
