import Base from '../components/TemplateBase/TemplateBase';
import Content from '../components/Category/Category';
import axios from 'axios';

import config from '../components/config';

const Category = (props) => <Base><Content cat={props.cat} /></Base>

Category.getInitialProps = async function(context) {
    const slug = context.query.slug;
    try {
      const res = await axios.get(config.api.categories);
      const cat = res.data.categories.find(cat => cat.slug === slug)
      return { cat }
    } catch (error) {
      console.error(error);
    }
  }

export default Category;
