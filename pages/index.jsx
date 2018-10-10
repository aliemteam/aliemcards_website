import Base from '../components/TemplateBase/TemplateBase';
import Content from '../components/Home/Home';
import axios from 'axios';

import config from '../components/config';

const Home = (props) => <Base><Content updates={props.updates} created={props.created} /></Base>

Home.getInitialProps = async function() {
    try {
      const res = await axios.get(config.api.recent);
      return {
        updates: res.data.updates,
        created: res.data.created
      }
    } catch (error) {
      console.error(error);
    }
  }

export default Home;
