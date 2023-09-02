import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    };

    // Register the error handler
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', errorHandler);

    // Cleanup the event listeners
    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  if (hasError) {
    // Render fallback UI or error message
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error && error.toString()}</p>
        <p>Component Stack Error Details: {errorInfo && errorInfo.componentStack}</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
