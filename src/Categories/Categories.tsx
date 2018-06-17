import * as React from 'react';
import { Link } from 'react-router-dom';

import { Taxonomy } from '../types';

interface Props {
  categories: Taxonomy[]
}

const Categories = (props: Props) => 
  <div>
    <h1>Categories</h1>
    <div className="card-list">
      {props.categories.map(category => (
        <div key={category.slug} className="card-list__item">
          <Link to={`/categories/${category.slug}`} className="card-list__item-title">
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  </div>;

export default Categories;
