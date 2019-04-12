import React from 'react';
import File from './File';
import '../style/card.scss';

const Card = props => {
  const { title, description, featured, documentSize } = props.card;
  const desc = () => {
    if (description) return <article>{description}</article>;
    return null;
  };

  const file = () => {
    if (documentSize) return <File filesize={documentSize} />;
    return null;
  };

  const cardClass = `FedTest-card${featured === 'true' ? ' FedTest-card--featured' : ''}`;

  return (
    <section className={cardClass}>
      <h3>{title}</h3>
      {desc()}
      {file()}
      <figure className='FedTest-arrow'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
          <path d='M352.4 66.3c-5.1-6-12.6-9.5-20.5-9.5-6.2 0-12.3 2.2-17.1 6.1-11.3 9.3-12.8 25.9-3.4 37l105 124-389.6-.3C12 223.6 0 235.3 0 249.8s11.9 26.3 26.6 26.3l389.5.3-104.7 123.7c-9.4 11.1-7.9 27.7 3.4 37 4.8 3.9 10.9 6.1 17.1 6.1 7.9 0 15.4-3.5 20.5-9.5l141.4-166.9c4-4.7 6.2-10.7 6.2-16.8 0-6.1-2.2-12.1-6.2-16.8L352.4 66.3z' />
        </svg>
      </figure>
    </section>
  );
};

export default Card;