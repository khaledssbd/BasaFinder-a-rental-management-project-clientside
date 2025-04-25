import BFContainer from '@/components/ui/core/BFContainer';
import { termsAndConditionsPageMetadata } from '@/contants';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = termsAndConditionsPageMetadata;

const TermsAndConditionsPage = () => {
  return (
    <BFContainer>
      <div className="md:mx-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Terms & Conditions
        </h1>
        <p className="text-lg dark:text-white text-justify py-4">
          Welcome to{' '}
          <Link
            href="/"
            className="font-semibold text-blue-500  hover:underline"
          >
            BasaFinder
          </Link>
          . By using our platform, you agree to the following terms and
          conditions.
        </p>

        <div className="space-y-8">
          {/* User Responsibilities */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              User Responsibilities
            </h2>
            <p className="dark:text-white text-justify">
              As a user of BasaFinder, you are responsible for ensuring that the
              information you provide is accurate and up-to-date. Any misuse of
              the platform, including fraudulent listings or false information,
              may result in account suspension.
            </p>
          </section>

          {/* Rental Listings & Agreements */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Rental Listings & Agreements
            </h2>
            <p className="dark:text-white text-justify">
              BasaFinder serves as a platform to connect tenants and landlords.
              We do not own or manage any of the listed properties. Users should
              verify the authenticity of listings before making rental
              agreements. BasaFinder is not liable for any disputes between
              landlords and tenants.
            </p>
          </section>

          {/* Privacy & Data Security */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Privacy & Data Security
            </h2>
            <p className="dark:text-white text-justify">
              We value your privacy and take necessary measures to protect your
              personal information. By using BasaFinder, you consent to our data
              collection and usage policies as outlined in our{' '}
              <Link
                href="/privacy-policy"
                className="text-blue-500 font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Prohibited Activities
            </h2>
            <ul className="list-disc list-inside dark:text-white space-y-3 text-justify">
              <li>No fraudulent or misleading listings.</li>
              <li>No harassment or abuse of other users.</li>
              <li>No unauthorized use of data or scraping of information.</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Changes to Terms
            </h2>
            <p className="dark:text-white text-justify">
              BasaFinder reserves the right to update or modify these terms at
              any time. Continued use of the platform constitutes acceptance of
              any changes.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Contact Us
            </h2>
            <p className="dark:text-white text-justify">
              If you have any questions about these terms, please{' '}
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

export default TermsAndConditionsPage;
