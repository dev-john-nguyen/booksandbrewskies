import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="container" style={{height: "83vh"}}>
    <div className="row h-100 justify-content-center align-items-center">
      <h1>Page Not Found!</h1>
      <svg className="bi bi-search" width="4em" height="4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
      </svg>
    </div>
</div>
  )
}

export default NotFoundPage;
