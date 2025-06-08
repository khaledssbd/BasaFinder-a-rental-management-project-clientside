'use client';

import { useEffect } from 'react';

const OfflineProvider = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/offline.js')
        // .then(registration => {
        //   console.log('ServiceWorker registration successful');
        // })
        // .catch(err => {
        //   console.log('ServiceWorker registration failed: ', err);
        // });
    }
  }, []);

  return null;
};

export default OfflineProvider;
