import * as React from 'react';
import {withRouter} from 'next/router';
//import { Helmet } from 'react-helmet';
import marked from 'marked';

import './card.sass';

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    this.content = React.createRef();
  }

  render() {
    const lastUpdate = this.props.card.updates
    ? new Date(this.props.card.updates[0]).toLocaleDateString('en-US', {
        timeZone: 'UTC',
      })
    : new Date(this.props.card.created).toLocaleDateString('en-US', {
        timeZone: 'UTC',
      });

    const html = marked(this.props.card.body);
    
    return (
      <article role="article">
        {/* <Helmet>
          <script type="application/ld+json">{JSON.stringify({ headline: this.props.card.title })}</script>
        </Helmet> */}
        <h1>{this.props.card.title}</h1>
        <div className="card">
          <div className="card__meta">
            <div>
              <strong>{this.props.card.authors.length > 1 ? 'Authors: ' : 'Author: '}</strong>
              {this.props.card.authors.join(', ')}
            </div>
            <div>
              <strong>Updated:</strong> {lastUpdate}
            </div>
          </div>
          <div
            ref={this.content}
            className="card__content"
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
        </div>
      </article>
    );
  }
}

export default withRouter(Card)
