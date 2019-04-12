import React from 'react';
import File from './File';
import arrowRight from '../svg/arrow-right';

const Card = props => {
  const { title, description, featured, documnetSize } = props.card;

  const desc = () => {
    if (description) return <article>{description}</article>;
    return null;
  };

  const file = () => {
    if (documnetSize) return <File filesize={documnetSize} />;
    return null;
  };

  const cardClass = `FedTest-card${featured ? ' FedTest-card--featured' : ''}`;

  return (
    <section className={cardClass}>
      <h3>{title}</h3>
      {desc()}
      {file()}
      <img src={arrowRight} alt='arrow-right' />
    </section>
  );
};

export default Card;
