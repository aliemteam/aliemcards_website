import Base from '../components/TemplateBase/TemplateBase';
import Content from '../components/Categories/Categories';
import axios from 'axios';

import config from '../components/config';

const Categories = (props) => <Base><Content categories={props.categories} /></Base>

Categories.getInitialProps = async function() {
    try {
      const res = await axios.get(config.api.categories);
      return {
        categories: res.data.categories
      }
    } catch (error) {
      console.error(error);
    }
  }

export default Categories;
