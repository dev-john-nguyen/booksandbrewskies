import React from 'react';

const NotFoundPage = ({ text, body }) => {
  if (!text) {
    text = "Not Found!"
  }

  return (
    <div className="not-found">
      <div className="not-found__header">
        <div className="not-found__text">
          <h1>{text}</h1>
        </div>
      </div>
      <div className="not-found__body">
        {body}
      </div>
    </div>
  )
}

export default NotFoundPage;
