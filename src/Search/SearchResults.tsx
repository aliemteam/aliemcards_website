import * as React from 'react';
import { Link } from 'react-router-dom';

import { CardSummary } from '../types';

interface Props {
  cards: CardSummary[],
  onClick: any
}

export default class SearchResults extends React.PureComponent<Props, {}> {
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
            <Link to={`/cards/${card.slug}`} onClick={this.props.onClick}>
              {card.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
};
