import Base from '../components/TemplateBase/TemplateBase';
import Card from '../components/Card/Card';
import axios from 'axios';

import config from '../components/config';

const CardPage = (props) => <Base><Card card={props.card} /></Base>

CardPage.getInitialProps = async function(context) {
    const slug = context.query.slug;
    try {
      const res = await axios.get(`${config.api.card}/${slug}.json`);
      return { card: res.data }
    } catch (error) {
      return { error }
    }
  }

export default CardPage;
