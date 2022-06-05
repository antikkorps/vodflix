import React from 'react';
import './Quickview.scss';

function Quickview() {
  return (
    <div className='Quickview'>
      <div className='Quickview__banner'>
        <div className='Quickview__content'>
          <h3 className='Quickview__title'>title</h3>
          <p className='Quickview__description'>
            lorem ipsum dolor sit amet, consectetur adip
          </p>
        </div>
        <button className='Quickview__button'></button>
      </div>
    </div>
  );
}

export default Quickview;
