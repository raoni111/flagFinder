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
    this.returnGriDiv();
  }

  async countries() {
    this.response = await fetch('https://restcountries.com/v2/all');
    this.data = await this.response.json();
    return this.data;
  }

  returnGriDiv() {
    const arrayOfCountri = [];
    this.countries()
      .then((response) => {
        for (let i = 0; i <= response.length - 1; i += 1) {
          const div = (
            <div className="countries-card" id={response[i].name}>
              <div className="flag-conteiner">
                <img src={response[i].flags.png} alt="countries flags" />
              </div>
              <article>
                <h1>{response[i].name}</h1>
                <div>
                  <h3>
                    Population: <span>{response[i].population}</span>
                  </h3>
                  <h3>
                    Region: <span>{response[i].region}</span>
                  </h3>
                  <h3>
                    Capital: <span>{response[i].capital}</span>
                  </h3>
                </div>
              </article>
            </div>
          );
          arrayOfCountri.push(div);
        }
        this.setState({
          countries: arrayOfCountri,
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
                <FiSearch className="search-icon" size="16" />
                <input
                  type="text"
                  value={input}
                  placeholder="Search for a coutry..."
                />
              </div>
              <div className="select-content">
                <select className="custon-select">
                  <option className="selected" selected>
                    Filter by Reagion
                  </option>
                  <option>Africa</option>
                  <option>America</option>
                  <option>Asia</option>
                  <option>Europe</option>
                  <option>Oceania</option>
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
