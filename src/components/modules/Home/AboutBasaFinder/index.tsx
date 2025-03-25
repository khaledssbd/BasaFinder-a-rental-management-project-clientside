'use client';

import { Typewriter } from 'react-simple-typewriter';

const AboutBasaFinder = () => {
  return (
    <section
      className="py-10 my-20 bg-fixed"
      style={{ backgroundImage: `url('/images/rooms/room-4.jpeg')` }} // image must be in public folder and use from public folder.. lest deployment build dont work
    >
      <div className="py-20 px-8 md:px-36 bg-white w-4/5 mx-auto rounded-md">
        <h1 className="text-3xl md:text-5xl mb-8 text-black text-center">
          BasaFinder
        </h1>

        <h3 className="text-justify min-h-56 lg:min-h-20">
          <span style={{ color: 'green', fontWeight: 'normal' }}>
            <Typewriter
              words={[
                'BasaFinder offers seamless and secured staying opportunities. With automated billing, and community engagement features, it simplifies rental management. Enjoy convenience, efficiency, and robust security with our BasaFinder.',
              ]}
              loop={50}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={25}
              delaySpeed={1000}
            />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default AboutBasaFinder;
