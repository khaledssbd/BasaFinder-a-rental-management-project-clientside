import BFContainer from '@/components/ui/core/BFContainer';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <BFContainer>
      <div className="md:mx-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          About BasaFinder
        </h1>
        <p className="text-lg dark:text-white text-justify py-4">
          Welcome to{' '}
          <Link
            href="/"
            className="font-semibold text-blue-500 hover:underline"
          >
            BasaFinder
          </Link>{' '}
          – your trusted platform for finding the perfect rental home. We are
          committed to connecting tenants and landlords in a seamless,
          hassle-free way, ensuring a smooth rental experience for everyone.
        </p>

        <div className="space-y-8">
          {/* Our Mission */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Our Mission
            </h2>
            <p className="dark:text-white text-justify">
              At BasaFinder, our mission is to simplify the house-hunting
              process. We aim to provide a reliable and efficient platform where
              tenants can find their ideal home and landlords can connect with
              genuine tenants. Our goal is to make renting easier, faster, and
              more transparent.
            </p>
          </section>

          {/* Our Story */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Our Story
            </h2>
            <p className="dark:text-white text-justify">
              BasaFinder was founded with a vision to solve the common
              challenges of the rental market. What started as a small
              initiative has now evolved into a trusted platform where people
              can find the right place to call home. Our journey has been driven
              by a passion for innovation and a commitment to customer
              satisfaction.
            </p>
          </section>

          {/* Why Choose Us? */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Why Choose BasaFinder?
            </h2>
            <ul className="list-disc list-inside dark:text-white space-y-3 text-justify">
              <li>
                <span className="font-semibold">Verified Listings:</span> We
                ensure that all rental properties listed on our platform are
                authentic and verified.
              </li>
              <li>
                <span className="font-semibold">Seamless Search:</span> Our
                platform allows tenants to search for rentals based on their
                specific needs, such as location, price, and amenities.
              </li>
              <li>
                <span className="font-semibold">Easy Communication:</span> We
                provide a direct communication channel between landlords and
                tenants, reducing delays and confusion.
              </li>
              <li>
                <span className="font-semibold">Secure Agreements:</span> Our
                platform ensures a safe and transparent agreement process for
                both parties.
              </li>
            </ul>
          </section>

          {/* Our Values */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Our Values
            </h2>
            <p className="dark:text-white text-justify">
              At BasaFinder, we believe in:
            </p>
            <ul className="list-disc list-inside dark:text-white space-y-3 mt-3 text-justify">
              <li>
                <span className="font-semibold">Trust & Transparency:</span>
                We ensure fair and honest dealings between tenants and
                landlords.
              </li>
              <li>
                <span className="font-semibold">Efficiency:</span>
                Our goal is to make the rental process quick and stress-free.
              </li>
              <li>
                <span className="font-semibold">Customer Satisfaction:</span>
                We strive to provide the best experience for both tenants and
                landlords.
              </li>
            </ul>
          </section>

          {/* Join the BasaFinder Community */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold py-4">
              Find Your Perfect Home
            </h2>
            <p className="dark:text-white text-justify">
              Whether you are searching for a cozy apartment or a spacious
              house, BasaFinder makes it easy to find your dream rental. Explore
              our listings and start your journey today.
            </p>
            <p className="dark:text-white mt-4">
              Ready to find your next home?{' '}
              <Link
                href="/rentals"
                className="text-blue-500 font-semibold hover:underline"
              >
                Browse available rentals
              </Link>{' '}
              or{' '}
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

export default AboutUsPage;
