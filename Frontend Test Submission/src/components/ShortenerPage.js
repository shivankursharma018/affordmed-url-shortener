import React, { useEffect } from 'react';
import log from '../logging-middleware';

const ShortenerPage = () => {
  useEffect(() => {
    const logPageView = async () => {
      await log({
        level: 'info',
        packageName: 'shortener', // CHANGE 'package' to 'packageName'
        version: '1.0.0',
        message: 'ShortenerPage loaded.',
      });
    };
    logPageView();
  }, []);

  return (
    <div>ShortenerPage</div>
  );
};

export default ShortenerPage;