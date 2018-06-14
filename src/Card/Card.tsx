import * as React from 'react';
import axios from 'axios';

import config from '../config';
import { Card } from '../types';

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

export default class Home extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    }
  }

  componentDidMount() {
    axios.get(`${config.api.card}/${this.props.match.params.slug}.json`)
      .then(res => {
        console.log(res.data);
        this.setState({ card: res.data });
      });
  }

  render() { 
    return (
      <div className="row row--wrap">
        {this.state.card && this.state.card.body}
      </div>
    );
  }
}
