import React from 'react';

const Textarea = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text } = props;
  return <textarea>{text}</textarea>;
};

export default Textarea;
