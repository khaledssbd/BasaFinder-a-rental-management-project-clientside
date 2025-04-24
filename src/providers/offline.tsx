'use client';

import { useEffect } from 'react';

const OfflineProvides = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/offline.js');
    }
  });

  return null;
};

export default OfflineProvides;
