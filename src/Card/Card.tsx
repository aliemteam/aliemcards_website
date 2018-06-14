import * as React from 'react';
import marked from 'marked';

import { Card } from '../types';

interface Props {
  card: Card
}

const Card = (props: Props) => (
  <div className="row row--wrap" dangerouslySetInnerHTML={{ __html: marked(props.card.body) }} />
);

export default Card;
