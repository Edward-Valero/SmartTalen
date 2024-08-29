import React from 'react';

const ErrorNotification = ({ message }) => {
  const style = {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  return (
    <div style={style}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorNotification;