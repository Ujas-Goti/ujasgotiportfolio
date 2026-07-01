import React from 'react';

const ButtonLink = ({ url, text, padding }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`glass-btn text-white ${padding} cursor-pointer`}
    >
      {text}
    </a>
  );
}

export default ButtonLink;