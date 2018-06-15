import * as React from 'react';
import marked from 'marked';

import { Card } from '../types';

const style = require('./card.sass');

interface Props {
  card: Card
}

export default class CardPage extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    const lastUpdate = this.props.card.updates
    ? new Date(this.props.card.updates[0]).toLocaleDateString('en-US', {
        timeZone: 'UTC',
      })
    : new Date(this.props.card.created).toLocaleDateString('en-US', {
        timeZone: 'UTC',
      });

    return (
      <article role="article">
        {/* <Helmet>
          <script type="application/ld+json">{JSON.stringify({ headline: card.title })}</script>
        </Helmet> */}
        <h1>{this.props.card.title}</h1>
        <div className="card">
          <div className="card__meta">
            <div>
              <strong>{this.props.card.authors.length > 1 ? 'Authors: ' : 'Author: '}</strong>
              {this.props.card.authors.map(author => author.name).join(', ')}
            </div>
            <div>
              <strong>Updated:</strong> {lastUpdate}
            </div>
          </div>
          <div
            className="card__content"
            dangerouslySetInnerHTML={{
              __html: marked(this.props.card.body)
            }}
          />
        </div>
      </article>
    );    
  }
}
