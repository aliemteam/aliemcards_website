import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Search from '../Search/Search';

const logo = require('./logo.svg');
const style = require('./header.sass');

interface State {
  navDrawerOpen: boolean;
}

class Header extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
    };
  }

  handleClick = () => {
    this.setState({ navDrawerOpen: !this.state.navDrawerOpen });
  };

  render() {
    return (
      <div>
        <div className="header" role="banner">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="header__nav-button">
            <button
              className={
                this.state.navDrawerOpen
                  ? 'hamburger hamburger__squeeze hamburger__squeeze--active'
                  : 'hamburger hamburger__squeeze'
              }
              onClick={this.handleClick}
            >
              <span className="hamburger__box">
                <span className="hamburger__inner" />
              </span>
            </button>
          </div>
          <nav
            className={
              this.state.navDrawerOpen
                ? 'header__nav header__nav--open'
                : 'header__nav header__nav--closed'
            }
            role="navigation"
          >
            <ul>
              <li>
                <Link to="/cards" onClick={this.handleClick}>
                  Cards
                </Link>
              </li>
              <li>
                <Link to="/categories" onClick={this.handleClick}>
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={this.handleClick}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Search />
      </div>
    );
  }
}

export default withRouter(Header);
