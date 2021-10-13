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
// .sqi.common this.formatsLanguages()
export default class Home extends Component {
  state = {
    input: '',
    countries: [],
    countrieDetail: 'close-details',
    countrie: [
      {
        flags: {
          png: '',
        },
        currencies: [{}],
        languages: [{}],
      },
    ],
    languages: '',
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

  openDetail = (e) => {
    this.countrie(e.target.id)
      .then((response) => {
        this.setState({
          countrieDetail: 'open-details',
          countrie: response,
        });
        this.formatsLanguages(response[0].languages);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  closeDetail = () => {
    this.setState({
      countrieDetail: 'close-details',
    });
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

  formatsLanguages = (languagesParams) => {
    let languages = '';
    languagesParams.map((value, index) => {
      if (index > 0) {
        languages += `, ${value.iso639_2}`;
      }
      languages += value.iso639_2;
      return '';
    });
    this.setState({
      languages,
    });
  };

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
    const { input, countries, countrieDetail, countrie, languages } =
      this.state;
    console.log(countrie[0]);
    return (
      <>
        <Section>
          <Header className={countrieDetail}>
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
          <CountryDetail className={countrieDetail}>
            <div className="back-button-conteiner">
              <button type="button" onClick={this.closeDetail}>
                <FiArrowLeft class="back-arrow" size="20" />
                Back
              </button>
            </div>
            <article className="conteiner-coutrie-details">
              <div className="countrie-flag">
                <img src={countrie[0].flags.png} alt="countrie flag" />
              </div>
              <div className="countrie-details">
                <div className="common-name">
                  <h1>{countrie[0].name}</h1>
                </div>
                <div className="grid-details">
                  <div className="native-name">
                    <h1>
                      Native Name:
                      <span>{countrie[0].nativeName}</span>
                    </h1>
                  </div>
                  <div className="population">
                    <h1>
                      Population:
                      <span>{countrie[0].population}</span>
                    </h1>
                  </div>
                  <div className="region">
                    <h1>
                      Region:
                      <span>{countrie[0].region}</span>
                    </h1>
                  </div>
                  <div className="sub-region">
                    <h1>
                      Sub Region:
                      <span>{countrie[0].subregion}</span>
                    </h1>
                  </div>
                  <div className="capital">
                    <h1>
                      Capital:
                      <span>{countrie[0].capital}</span>
                    </h1>
                  </div>
                  <div className="top-level-domain">
                    <h1>
                      Top Level Domain:
                      <span>{countrie[0].topLevelDomain}</span>
                    </h1>
                  </div>
                  <div className="currencies">
                    <h1>
                      Currencies:
                      <span>{countrie[0].currencies[0].code}</span>
                    </h1>
                  </div>
                  <div className="languages">
                    <h1>
                      Languages:
                      <span>{languages}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </article>
          </CountryDetail>
          <Countries className="countries-conteiner">
            {countries.map((value) => value)}
          </Countries>
        </Section>
      </>
    );
  }
}
