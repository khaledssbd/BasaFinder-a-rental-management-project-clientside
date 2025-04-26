import BFContainer from '@/components/ui/core/BFContainer';
import { newsPageMetadata } from '@/utils/Metadata';
import { newsPageSchemaData } from '@/utils/SchemaData';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = newsPageMetadata;

const NewsPage = () => {
  const schemaData = newsPageSchemaData;

  return (
    <>
      <Script
        id="schema-markup-news"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <BFContainer>
        <div className="md:mx-20">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
            News & Updates
          </h1>
          <p className="text-lg dark:text-white text-justify py-4">
            Stay updated with the latest news, trends, and updates from{' '}
            <Link
              href="/"
              className="font-semibold text-blue-500 hover:underline"
            >
              BasaFinder
            </Link>
            . We bring you insights on the rental market, new features, and
            important announcements.
          </p>

          <div className="space-y-8">
            {/* Latest Market Trends */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold py-4">
                Latest Rental Market Trends
              </h2>
              <p className="dark:text-white text-justify">
                Discover recent shifts in the rental market, pricing updates,
                and key insights that will help tenants and landlords make
                informed decisions.
              </p>
            </section>

            {/* BasaFinder Updates */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold py-4">
                BasaFinder Platform Updates
              </h2>
              <p className="dark:text-white text-justify">
                We are constantly working to improve your experience. Check out
                our latest platform features, security enhancements, and service
                upgrades.
              </p>
            </section>

            {/* Tips & Guides */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold py-4">
                Tips & Guides
              </h2>
              <p className="dark:text-white text-justify">
                Get expert advice on house hunting, rental agreements, and
                making the most out of BasaFinder&apos;s features.
              </p>
            </section>
          </div>
        </div>
      </BFContainer>
    </>
  );
};

export default NewsPage;
