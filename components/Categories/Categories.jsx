import * as React from 'react';
import Link from 'next/link';

const Categories = (props) => 
  <div>
    <h1>Categories</h1>
    <div className="card-list">
      {props.categories.map(category => (
        <div key={category.slug} className="card-list__item">
          <Link 
            href={`/category?slug=${category.slug}`}
            as={`/categories/${category.slug}`}>
            <a className="card-list__item-title">{category.name}</a>
          </Link>
        </div>
      ))}
    </div>
  </div>;

export default Categories;
