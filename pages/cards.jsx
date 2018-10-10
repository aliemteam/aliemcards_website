import Base from '../components/TemplateBase/TemplateBase';
import CardListWithFilter from '../components/CardList/CardListWithFilter';
import axios from 'axios';

import config from '../components/config';

const Cards = (props) => <Base><CardListWithFilter cards={props.cards} taxonomy={props.categories} /></Base>

Cards.getInitialProps = async function() {
    try {
      const res_cards = await axios.get(config.api.summaries);
      const res_cats = await axios.get(config.api.categories);
      return {
        categories: res_cats.data.categories,
        cards: res_cards.data.card_summaries
      }
    } catch (error) {
      console.error(error);
    }
  }

export default Cards;