import NotFound from '@/components/modules/NotFound';
import { notFoundPageMetadata } from '@/utils/Metadata';
import { Metadata } from 'next';

const NotFoundPage = () => {
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default NotFoundPage;

export const metadata: Metadata = notFoundPageMetadata;
