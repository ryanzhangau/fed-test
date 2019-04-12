import React from 'react';
import '../style/file.scss';

const File = props => {
  return (
    <div className='FedTest-filesize'>
      <figure className='FedTest-fileicon'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'>
          <path d='M327 0H114.7C78.3 0 48.6 29.4 48.6 65.6v368.8c0 36.2 29.6 65.6 66.1 65.6h270.7c36.4 0 66.1-29.4 66.1-65.6V138.1L327 0zm8.7 56.6l64.8 71.9h-64.8V56.6zm49.6 412.2H114.7c-19.1 0-34.6-15.4-34.6-34.4V65.6c0-18.9 15.5-34.4 34.6-34.4h189.5v128.4h115.7v274.7c0 19.1-15.5 34.5-34.6 34.5z' />
          <path d='M154.2 208.3h191.6v31.3H154.2v-31.3zm0 72.2h191.6v31.3H154.2v-31.3zm0 72.1h191.6v31.3H154.2v-31.3z' />
        </svg>
      </figure>
      <span>PDF ({props.filesize})</span>
    </div>
  );
};

export default File;
