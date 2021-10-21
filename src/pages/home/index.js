/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';

// icons
import { WiMoonWaningCrescent2 } from 'react-icons/wi';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';

// style component
import {
  Section,
  Header,
  Article,
  Nav,
  Countries,
  CountryDetail,
} from './style';

export default class Home extends Component {
  state = {
    input: '',
    countries: [],
    light: 'lightOff',
    countrieDetail: 'close-details',
    countrie: {
      flags: {
        png: '',
      },
      currencies: '',
      languages: '',
      borderElement: [''],
    },
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

  hundleSetLight = () => {
    const { light } = this.state;
    if (light === 'lightOn') {
      this.setState({ light: 'lightOff' });
    } else {
      this.setState({ light: 'lightOn' });
    }
    document.body.id = 'light';
    console.log(light);
  };

  openDetail = (e) => {
    this.countrie(e.target.id)
      .then((response) => {
        const countrieObj = this.buildsObjectOfCountrie(response[0]);
        this.setState({
          countrieDetail: 'open-details ',
          countrie: countrieObj,
        });
        this.bodyScroll(false);
        this.builBorderElement(response[0].borders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  closeDetail = () => {
    this.bodyScroll(true);
    this.setState({
      countrieDetail: 'close-details',
    });
  };

  bodyScroll = (boolean) => {
    if (!boolean) {
      document.body.style.overflowY = 'hidden';
      return;
    }
    document.body.style.overflowY = 'scroll';
  };

  buildElement = (response, index) => (
    <div
      className="countries-card"
      id={response[index].name}
      onClickCapture={this.openDetail}
    >
      <div className="flag-conteiner" id={response[index].name}>
        <img
          src={response[index].flags.png}
          alt="countries flags"
          id={response[index].name}
        />
      </div>
      <article id={response[index].name}>
        <h1 id={response[index].name}>{response[index].name}</h1>
        <div id={response[index].name}>
          <h3 id={response[index].name}>
            Population: <span>{response[index].population}</span>
          </h3>
          <h3 id={response[index].name}>
            Region: <span>{response[index].region}</span>
          </h3>
          <h3 id={response[index].name}>
            Capital: <span>{response[index].capital}</span>
          </h3>
        </div>
      </article>
    </div>
  );

  searchRegion = (param) => {
    if (param === 'all') {
      this.searchCountry();
      return;
    }
    const arrayOfCountri = [];
    this.allCountries()
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
    this.allCountries()
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

  buildsObjectOfCountrie = (countrieParams) => {
    const currencies = !countrieParams.currencies
      ? 'N/A'
      : countrieParams.currencies[0].code;
    return {
      png: !countrieParams.flags.png ? '' : countrieParams.flags.png,
      name: !countrieParams.name ? '' : countrieParams.name,
      nativeName: !countrieParams.nativeName ? '' : countrieParams.nativeName,
      population: !countrieParams.population ? '' : countrieParams.population,
      continent: !countrieParams.region ? '' : countrieParams.region,
      region: !countrieParams.subregion ? '' : countrieParams.subregion,
      capital: !countrieParams.capital ? '' : countrieParams.capital,
      topLevelDomain: !countrieParams.topLevelDomain
        ? ''
        : countrieParams.topLevelDomain,
      currencies,
      languages: this.formatLinguages(countrieParams.languages),
    };
  };

  formatLinguages = (params) => {
    let languages = '';
    for (let i = 0; i < params.length; i += 1) {
      if (i > 0) {
        languages += `, ${params[i].iso639_1}`;
      }
      languages += params[i].iso639_1;
    }
    return languages;
  };

  builBorderElement(borderParams) {
    if (!borderParams) return;
    const borderElements = document.createElement('div');
    this.searchCountriesByCode(borderParams.toString())
      .then((response) => {
        for (let i = 0; i < response.length; i += 1) {
          const div = document.createElement('div');
          const h1 = document.createElement('h1');
          h1.textContent = response[i].name;
          div.appendChild(h1);
          borderElements.appendChild(div);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    const borderContent = document.querySelector('.border-countries');
    borderContent.textContent = '';
    borderContent.appendChild(borderElements);
  }

  async allCountries() {
    this.response = await fetch('https://restcountries.com/v2/all');
    this.data = await this.response.json();
    return this.data;
  }

  async countrie(countrie) {
    this.response = await fetch(
      `https://restcountries.com/v2/name/${countrie}`,
    );
    this.date = await this.response.json();
    return this.date;
  }

  async searchCountriesByCode(codes) {
    this.response = await fetch(
      `https://restcountries.com/v2/alpha?codes=${codes}`,
    );
    this.date = await this.response.json();
    return this.date;
  }

  lookForFlag() {
    const arrayOfCountries = [];
    this.allCountries()
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
    const { input, countries, countrieDetail, countrie, light } = this.state;
    return (
      <>
        <Section className={countrieDetail} id={light}>
          <Header className={countrieDetail} id={light}>
            <h1 className="header-h header-component-one">
              Where in the World?
            </h1>
            <div
              className="header-component-two"
              onClickCapture={this.hundleSetLight}
            >
              <WiMoonWaningCrescent2 className="moonIcon" size="15" />
              <h2 className="header-h">Dark Mode</h2>
            </div>
          </Header>
          <Article>
            <Nav id={light}>
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
          <CountryDetail className={countrieDetail} id={light}>
            <div className="back-button-conteiner">
              <button type="button" onClick={this.closeDetail}>
                <FiArrowLeft class="back-arrow" size="20" />
                Back
              </button>
            </div>
            <article className="conteiner-coutrie-details">
              <div className="countrie-flag">
                <img src={countrie.png} alt="countrie flag" />
              </div>
              <div className="countrie-details">
                <div className="common-name">
                  <h1>{countrie.name}</h1>
                </div>
                <div className="grid-details">
                  <div className="native-name">
                    <h1>
                      Native Name:
                      <span>{countrie.nativeName}</span>
                    </h1>
                  </div>
                  <div className="population">
                    <h1>
                      Population:
                      <span>{countrie.population}</span>
                    </h1>
                  </div>
                  <div className="region">
                    <h1>
                      Region:
                      <span>{countrie.continent}</span>
                    </h1>
                  </div>
                  <div className="sub-region">
                    <h1>
                      Sub Region:
                      <span>{countrie.region}</span>
                    </h1>
                  </div>
                  <div className="capital">
                    <h1>
                      Capital:
                      <span>{countrie.capital}</span>
                    </h1>
                  </div>
                  <div className="top-level-domain">
                    <h1>
                      Top Level Domain:
                      <span>{countrie.topLevelDomain}</span>
                    </h1>
                  </div>
                  <div className="currencies">
                    <h1>
                      Currencies:
                      <span>{countrie.currencies}</span>
                    </h1>
                  </div>
                  <div className="languages">
                    <h1>
                      Languages:
                      <span>{countrie.languages}</span>
                    </h1>
                  </div>
                </div>
                <div className="border-countries-conteiner">
                  <div>
                    <h1>Border Countries:</h1>
                  </div>
                  <div className="border-countries" />
                </div>
              </div>
            </article>
          </CountryDetail>
          <Countries className="countries-conteiner" id={light}>
            {countries.map((value) => value)}
          </Countries>
        </Section>
      </>
    );
  }
}
