import React, { useEffect } from 'react';
import log from '../logging-middleware';

const StatsPage = () => {
  useEffect(() => {
    const logPageView = async () => {
      await log({
        level: 'info',
        packageName: 'stats',
        version: '1.0.0',
        message: 'StatsPage loaded.',
      });
    };
    logPageView();
  }, []);

  return (
    <div>StatsPage</div>
  );
};

export default StatsPage;