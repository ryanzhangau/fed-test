import React from 'react';
import docImg from '../svg/document.svg';

const File = props => {
  return (
    <div className='FedTest-filesize'>
      <img src={docImg} alt='file-icon' />
      <span>{props.size}</span>
    </div>
  );
};

export default File;
