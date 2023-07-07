import React, { useState, useEffect } from 'react';

const usePath = () => {
  const [path, setPath] = useState(window.location.pathname);

  const newPath = () => {
    setPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', newPath);

    return () => {
      window.removeEventListener('popstate', newPath);
    };
  }, []);
  return path;
};
export default usePath;
