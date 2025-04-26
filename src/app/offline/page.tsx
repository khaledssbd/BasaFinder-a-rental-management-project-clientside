import OfflineImage from '@/assets/svgs/OfflineImage';
import { offlinePageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const OfflinePage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <div
        style={{
          width: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          margin: '0px 20px',
          gap: '20px',
        }}
      >
        <OfflineImage />

        <h2 className="text-lg font-semibold text-gray-700">You are offline</h2>
        <p className="text-sm text-gray-500">
          Please check your internet connection and try again.
        </p>
      </div>
    </div>
  );
};

export default OfflinePage;

export const metadata: Metadata = offlinePageMetadata;
