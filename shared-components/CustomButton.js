import React from 'react';

const CustomButton = ({ text, color, size, onClick }) => {
  const buttonStyle = {
    backgroundColor: color || '#007bff',
    fontSize: size === 'small' ? '12px' : size === 'large' ? '20px' : '16px',
    padding: size === 'small' ? '5px 10px' : size === 'large' ? '15px 30px' : '10px 20px',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;