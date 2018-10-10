import * as React from 'react';
import Link from 'next/link';


export default class SearchResults extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul>
        {this.props.cards.length == 0 &&
        <li className="search__result search__noresult">No results found</li>
        }
        {this.props.cards.map(card => (
          <li className="search__result" key={card.slug}>
            <Link href={`/cards/${card.slug}`}>
              <a onClick={this.props.onClick}>{card.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
};
