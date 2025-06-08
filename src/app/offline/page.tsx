import OfflineImage from '@/assets/svgs/OfflineImage';
import { offlinePageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const OfflinePage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        overflow: 'hidden', // Prevent scrollbars
        position: 'fixed', // Ensure it takes full viewport
        top: 0,
        left: 0,
        backgroundColor: 'white', // Ensure consistent background
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          margin: '0px 20px',
          gap: '20px',
          color: '#374151', // Consistent text color (gray-700)
        }}
      >
        <OfflineImage />

        <h2 style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>
          You are offline
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
};

export default OfflinePage;

export const metadata: Metadata = offlinePageMetadata;
