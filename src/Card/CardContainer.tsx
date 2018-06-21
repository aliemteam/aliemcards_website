import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { Card } from '../types';

import CardPage from './Card';

interface Props {
  match: {
    params: {
      slug: string
    }
  }
}

interface State {
  card: Card | null
}

export default class HomeContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    }
  }

  componentDidMount() {
    axios.get(`${config.api.card}/${this.props.match.params.slug}.json`)
      .then(res => {
        this.setState({ card: res.data });
      });
  }

  render() { 
    return (
      <div>
        { this.state.card ? <CardPage card={this.state.card} /> : null }
      </div>
    );
  }
}
