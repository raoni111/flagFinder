import React, { Component } from 'react';

// icons
import { WiMoonWaningCrescent2 } from 'react-icons/wi';
import { FiSearch } from 'react-icons/fi';

// style component
import { Section, Header, Article, Nav } from './style';

export default class Home extends Component {
  state = {
    input: '',
  };

  render() {
    const { input } = this.state;
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
        </Section>
      </>
    );
  }
}
