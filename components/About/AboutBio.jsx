import * as React from 'react';

const AboutBio = props => (
  <div className="column column--relative-50">
    <h3>{props.name}</h3>
    <div>
      <div>
        <strong>{props.title}</strong>
      </div>
      <div>{props.credentials}</div>
      <div>{props.location}</div>
      <div>
        <a href={`https://www.twitter.com/${props.twitter}`}>@{props.twitter}</a>
      </div>
    </div>
  </div>
);

export default AboutBio;
