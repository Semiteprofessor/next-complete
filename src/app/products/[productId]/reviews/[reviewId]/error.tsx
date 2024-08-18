"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="error-message">
      <span>⛔</span>
      {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
