import * as React from 'react';
import Link from 'next/link';
import './header.sass';

import Search from '../Search/Search';

class Header extends React.PureComponent {
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
            <Link href="/">
              <a><img src="/static/logo.svg" /></a>
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
                <Link href="/cards">
                  <a onClick={this.handleClick}>Cards</a>
                </Link>
              </li>
              <li>
                <Link href="/categories">
                  <a onClick={this.handleClick}>Categories</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                    <a onClick={this.handleClick}>About</a>
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

export default Header;
