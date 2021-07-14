import React from 'react';

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick, name } = props;
  return (
    <button type="submit" onClick={onClick}>
      {' '}
      {name}
    </button>
  );
};
export default Button;
