import * as React from 'react';
import { withRouter } from 'react-router-dom';
import marked from 'marked';

import { Card } from '../types';

const style = require('./card.sass');

interface Props {
  card: Card,
  history: any
}

class CardPage extends React.PureComponent<Props> {
  // what is the appropriate typing???
  content: any;
  
  constructor(props) {
    super(props);
    this.content = React.createRef();
    this.onClickStaticLink = this.onClickStaticLink.bind(this);
  }

  // https://gist.github.com/jakub-gawlas/4e49b2edb37b2878a2f0b1e5ebc3d0a0
  // https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component
  componentDidMount() {
    this.handleLinks();
  }

  componentDidUpdate() {
    this.handleLinks();
  }

  componentWillUnmount() {
    const links = this.content.current.querySelectorAll('a');
    if (links) {
      links.forEach(link => { link.removeEventListener('click', this.onClickStaticLink) });
    }
  }

  handleLinks() {
    const links = this.content.current.querySelectorAll('a');
    if (links) {
      links.forEach(link => {
        link.addEventListener('click', this.onClickStaticLink)
      });
    }
  }

  // manage relative links within card content
  onClickStaticLink(e) {
    const href = e.target.href;
    const pathname = e.target.pathname;
    // outside links
    if(href.indexOf(window.location.hostname) === -1)
      return;
    // internal anchors
    if(href.indexOf('#') !== -1)
      return;
    e.preventDefault();
    this.props.history.push(`${pathname}`);
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
          <script type="application/ld+json">{JSON.stringify({ headline: card.title })}</script>
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

export default withRouter(CardPage);
