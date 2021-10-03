import styled, { css } from 'styled-components';

// color
import * as color from '../../config/color';

function displayFlex(justifyContent, alignItens) {
  return css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItens};
  `;
}

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${color.VeryDarkBlue};
`;
export const Header = styled.header`
  ${displayFlex('space-between', 'center')}
  width: 100%;
  padding: 1.5rem 7rem;
  background-color: ${color.DarkBlue};
  .header-component-one {
    font-size: 2rem;
    color: ${color.FontColorWhite};
  }
  .header-component-two {
    ${displayFlex('center', 'center')}
    width: auto;
    color: ${color.FontColorWhite};
    .moonIcon {
      ${displayFlex('center', 'center')}
    }
    h2 {
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
`;
export const Article = styled.article`
  padding: 0rem 7rem;
`;
export const Nav = styled.nav`
  ${displayFlex('space-between', 'center')}
  width: 100%;
  margin-top: 3rem;
  .search-content {
    ${displayFlex('center', 'center')}
    padding: 1.3rem 1rem;
    border-radius: 5px;
    background-color: ${color.DarkBlue};
    .search-icon {
      color: ${color.FontColorWhite};
    }
    input {
      width: 250px;
      margin-left: 1rem;
      font-size: 1.2rem;
      color: ${color.FontColorVaryLigthGray};
      background-color: transparent;
      &::placeholder {
        color: ${color.FontColorVaryLigthGray};
      }
    }
  }
  .select-content {
    .custon-select {
      margin-bottom: 1rem;
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
`;
