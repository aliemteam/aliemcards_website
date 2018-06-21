import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { Card } from '../types';

import CardPage from './Card';
import Loader from '../Loader/Loader';

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

  handleAJAX() {
    axios.get(`${config.api.card}/${this.props.match.params.slug}.json`)
      .then(res => {
        this.setState({ card: res.data });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) this.handleAJAX();
  }

  componentDidMount() {
    this.handleAJAX();
  }

  render() { 
    return (
      <div>
        { this.state.card ? <CardPage card={this.state.card} /> : <Loader /> }
      </div>
    );
  }
}
