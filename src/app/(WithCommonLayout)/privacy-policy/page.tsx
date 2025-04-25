import BFContainer from '@/components/ui/core/BFContainer';
import { privacyPolicyPageMetadata } from '@/contants';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = privacyPolicyPageMetadata;

const PrivacyPolicyPage = () => {
  return (
    <BFContainer>
      <div className="md:mx-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Privacy Policy
        </h1>
        <p className="text-lg dark:text-white text-justify py-4">
          Welcome to{' '}
          <Link
            href="/"
            className="font-semibold text-blue-500 hover:underline"
          >
            BasaFinder
          </Link>
          . We value your privacy and are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use, and
          safeguard your data.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Information We Collect
            </h2>
            <p className="dark:text-white text-justify">
              We collect personal information such as your name, email address,
              phone number, and property details when you use our platform.
              Additionally, we may collect browsing data through cookies to
              enhance your experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              How We Use Your Information
            </h2>
            <p className="dark:text-white text-justify">
              The information we collect is used to connect tenants and
              landlords, improve our services, process payments, and provide
              customer support. We do not sell or share your data with third
              parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Data Protection
            </h2>
            <p className="dark:text-white text-justify">
              We implement security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Your Rights
            </h2>
            <p className="dark:text-white text-justify">
              You have the right to access, update, or delete your personal
              data. If you wish to modify your information or opt-out of certain
              services, please{' '}
              <Link
                href="/"
                className="text-blue-500 font-semibold hover:underline"
              >
                get in touch
              </Link>{' '}
              to learn more.
            </p>
          </section>
        </div>
      </div>
    </BFContainer>
  );
};

export default PrivacyPolicyPage;
