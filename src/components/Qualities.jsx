import React from 'react';
import { data } from '../restApi.json';

const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
      <div className="container">
        {data[0]?.ourQualities?.map(({ id, image, title, description }) => (
          <div className='card' key={id}>
            <img src={image} alt={title} />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualities;





