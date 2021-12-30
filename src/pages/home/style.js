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
  &#lightOn {
    background-color: ${color.VeryLightGray};
  }
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
    cursor: pointer;
    width: auto;
    color: ${color.FontColorWhite};
    .moonIcon {
      ${displayFlex('center', 'row', 'center')}
      transform: rotate(-30deg);
    }
    h2 {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
  &#lightOn {
    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.1);
    background-color: ${color.VeryLightGray};
    .header-component-one {
      color: ${color.VeryDarkBlue};
    }
    .header-component-two {
      color: ${color.VeryDarkBlue};
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
  &#lightOn {
    background-color: ${color.VeryLightGray};
    .search-content {
      background-color: ${color.white};
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      input {
        color: ${color.VeryDarkBlue};
        background-color: transparent;
        &::placeholder {
          color: ${color.DarkBlue};
        }
      }
    }
    .select-content {
      .custon-select {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        color: ${color.VeryDarkBlue};
        background-color: transparent;
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
          ${displayFlex('flex-start', 'row', 'start')}
          font-size: 1.4rem;
          margin: 1rem 0rem 0rem 0rem;
          color: ${color.FontColorVaryLigthGray};
          span {
            margin-left: 0.5rem;
            color: ${color.FontColorGray};
          }
        }
      }
    }
  }
  &#lightOn {
    .countries-card {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      background-color: hsl(0, 0%, 98%);
      article {
        h1 {
          color: ${color.VeryDarkBlue};
        }
        div {
          h3 {
            color: ${color.VeryDarkBlue};
          }
          span {
            color: ${color.DarkBlue};
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
    width: 100%;
    color: ${color.FontColorWhite};
    .countrie-flag {
      width: 30%;
      margin-right: 5rem;
      img {
        width: 100%;
        height: 250px;
      }
    }
    .countrie-details {
      padding: 2rem;
      width: 60%;
      .common-name {
        font-size: 2.7rem;
      }
      .grid-details {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-areas:
          'content1 content6'
          'content2 content7'
          'content3 content8'
          'content4 conrent4'
          'content5 content5';
        width: 100%;
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
  .border-countries-conteiner {
    ${displayFlex('start', 'row', 'start')}
    width: 100%;
    margin-top: 1rem;
    div {
      margin-right: 1rem;
      padding: 0.5rem;
      h1 {
        font-size: 1.3rem;
      }
    }
    .border-countries {
      ${displayFlex('start', 'row', 'center')}
      border-radius: 5px;
      background-color: hsl(210, 24%, 13%);
      div {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: auto;
        gap: 10px;
        padding: 0.01rem;
        div {
          ${displayFlex('center', 'row', 'center')}
          padding: 0.5rem;
          border-radius: 5px;
          background-color: ${color.DarkBlue};
          h1 {
            font-size: 1rem;
          }
          &:nth-last-child(1) {
            margin-right: 0rem;
          }
        }
      }
    }
  }
  &#lightOn {
    background-color: ${color.VeryLightGray};
    div {
      h1 {
        color: ${color.VeryDarkBlue};
      }
    }
    .back-button-conteiner {
      button {
        color: ${color.VeryDarkBlue};
        background-color: ${color.white};
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        .back-arrow {
          color: ${color.VeryDarkBlue};
        }
      }
    }
    .border-countries {
      background-color: ${color.VeryLightGray};
    }
    .countrie-flag {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    }
    .border-countries-conteiner {
      background-color: ${color.VeryLightGray};
      div {
        div.borderCountry {
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
          color: ${color.VeryDarkBlue};
          background-color: ${color.white};
          h1 {
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    padding: 0rem 3rem;
    .border-countries-conteiner {
      .border-countries {
        div {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
      }
    }
  }
  @media (max-width: 820px) {
    overflow-y: scroll;
    padding: 0rem 3rem;
    .conteiner-coutrie-details {
      ${displayFlex('start', 'column', 'start')}
      .countrie-flag {
        width: 100%;
        margin: 0px;
        img {
          height: 400px;
        }
      }
      .countrie-details {
        width: 100%;
        margin-top: 1rem;
      }
    }
    .border-countries-conteiner {
      ${displayFlex('start', 'column', 'start')}
      .border-countries {
        div {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
        }
      }
    }
  }
  @media (max-width: 600px) {
    .conteiner-coutrie-details {
      .countrie-flag {
        img {
          height: 300px;
        }
      }
    }
  }
  @media (max-width: 520px) {
    .back-button-conteiner {
      margin: 8rem 0 4rem 0;
    }
    .conteiner-coutrie-details {
      .countrie-flag {
        img {
          height: 250px;
        }
      }
      .countrie-details {
        padding: 0rem;
      }
    }
    .border-countries-conteiner {
      .border-countries {
        width: 100%;
        div {
          width: 100%;
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
  @media (max-width: 450px) {
    .conteiner-coutrie-details {
      .countrie-details {
        .grid-details {
          grid-template-areas:
            'content1 content1'
            'content2 content2'
            'content3 content3'
            'content4 content4'
            'content5 content5'
            'content6 content6'
            'content7 content7'
            'content8 content8';
        }
      }
    }
    .border-countries-conteiner {
      .border-countries {
        width: 100%;
        div {
          width: 100%;
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
  @media (max-width: 400px) {
    .conteiner-coutrie-details {
      .countrie-flag {
        img {
          height: 200px;
        }
      }
    }
  }
  @media (max-width: 350px) {
    .border-countries-conteiner {
      .border-countries {
        width: 100%;
        div {
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
`;
