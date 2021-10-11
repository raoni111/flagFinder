/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';

// icons
import { WiMoonWaningCrescent2 } from 'react-icons/wi';
import { FiSearch } from 'react-icons/fi';

// style component
import { Section, Header, Article, Nav, Countries } from './style';

export default class Home extends Component {
  state = {
    input: '',
    countries: [],
  };

  componentDidMount() {
    this.lookForFlag();
  }

  hundleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  hundleKayDaw = (e) => {
    if (e.code === 'Enter') this.searchCountry();
  };

  hundleClick = () => {
    this.searchCountry();
  };

  hundleSelect = (e) => {
    this.searchRegion(e.target.value.toLowerCase());
  };

  buildElement = (response, index) => {
    const div = (
      <div className="countries-card" id={response[index].name}>
        <div className="flag-conteiner">
          <img src={response[index].flags.png} alt="countries flags" />
        </div>
        <article>
          <h1>{response[index].name}</h1>
          <div>
            <h3>
              Population: <span>{response[index].population}</span>
            </h3>
            <h3>
              Region: <span>{response[index].region}</span>
            </h3>
            <h3>
              Capital: <span>{response[index].capital}</span>
            </h3>
          </div>
        </article>
      </div>
    );
    return div;
  };

  searchRegion = (param) => {
    if (param === 'all') {
      this.searchCountry();
      return;
    }
    const arrayOfCountri = [];
    this.countries()
      .then((response) => {
        for (let i = 0; i < response.length; i += 1) {
          if (response[i].region.toLowerCase() === param) {
            arrayOfCountri.push(this.buildElement(response, i));
          }
        }
        this.setState({ countries: arrayOfCountri });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  searchCountry = () => {
    const { input } = this.state;
    if (!input) {
      this.lookForFlag();
      return;
    }
    const arrayOFCountri = [];
    this.countries()
      .then((response) => {
        for (let index = 0; index < response.length; index += 1) {
          const languageArray = Object.entries(response[index].translations);
          let index2 = '';
          if (response[index].name.toLowerCase() === input.toLowerCase()) {
            arrayOFCountri.push(this.buildElement(response, index));
            this.setState({ countries: arrayOFCountri });
            return;
          }
          // eslint-disable-next-line no-console
          for (index2 of languageArray) {
            const translatedName = index2[1].toLowerCase();
            if (translatedName === input.toLowerCase()) {
              arrayOFCountri.push(this.buildElement(response, index));
              this.setState({ countries: arrayOFCountri });
              return;
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async countries() {
    this.response = await fetch('https://restcountries.com/v2/all');
    this.data = await this.response.json();
    return this.data;
  }

  lookForFlag() {
    const arrayOfCountries = [];
    this.countries()
      .then((response) => {
        for (let i = 0; i < response.length; i += 1) {
          arrayOfCountries.push(this.buildElement(response, i));
        }
        this.setState({
          countries: arrayOfCountries,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { input, countries } = this.state;
    return (
      <>
        <Section>
          <Header>
            <h1 className="header-h header-component-one">
              Where in the World?
            </h1>
            <div className="header-component-two">
              <WiMoonWaningCrescent2 className="moonIcon" size="15" />
              <h2 className="header-h">Dark Mode</h2>
            </div>
          </Header>
          <Article>
            <Nav>
              <div className="search-content">
                <button
                  type="button"
                  className="button-search-countries"
                  onClick={this.hundleClick}
                >
                  <FiSearch className="search-icon" size="20" />
                </button>
                <input
                  type="text"
                  value={input}
                  placeholder="Search for a coutry..."
                  onChange={this.hundleChange}
                  onKeyPress={this.hundleKayDaw}
                />
              </div>
              <div className="select-content">
                <select className="custon-select" onChange={this.hundleSelect}>
                  <option className="selected" selected>
                    Filter by Reagion
                  </option>
                  <option value="All">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </select>
              </div>
            </Nav>
          </Article>
          <Countries className="countries-conteiner">
            {countries.map((value) => value)}
          </Countries>
        </Section>
      </>
    );
  }
}
