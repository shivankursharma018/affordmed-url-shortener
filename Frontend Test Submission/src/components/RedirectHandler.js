import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import log from '../logging-middleware';

const RedirectHandler = () => {
  const { code } = useParams();

  useEffect(() => {
    const logRedirectEvent = async () => {
      await log({
        level: 'info',
        packageName: 'redirect',
        version: '1.0.0',
        message: `RedirectHandler loaded for path parameter: ${code}.`,
      });
    };
    logRedirectEvent();
  }, [code]);

  return (
    <div>RedirectHandler</div>
  );
};

export default RedirectHandler;