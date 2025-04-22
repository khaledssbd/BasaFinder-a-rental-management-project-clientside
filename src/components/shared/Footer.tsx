import Logo from '@/assets/svgs/Logo';
import { Facebook, Instagram, X, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const navLinks = [
    { href: '/rentals', label: 'Rentals' },
    { href: '/about-us', label: 'About Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/terms-and-conditions', label: 'Terms' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/news', label: 'News' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/mdkhaledsshuvo', icon: Facebook },
    { href: 'https://www.instagram.com/mdkhaledsshuvo', icon: Instagram },
    { href: 'https://x.com/mdkhaledsshuvo', icon: X },
    { href: 'https://www.linkedin.com/in/mdkhaledsshuvo', icon: Linkedin },
  ];
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Logo & site-name */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-black flex items-center">
              <Logo />
              <h1>
                <span className="text-primary">Basa</span>Finder
              </h1>
            </Link>
          </div>
          <p className="text-gray-600 mt-3 md:w-1/2 text-xs leading-6">
            Find your perfect home with BasaFinder! 🏡 Discover the best rental
            deals this season—affordable, hassle-free, and tailored to your
            needs. Don’t miss out—limited listings available!
          </p>
        </div>

        <hr />
        {/* nav Links */}
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 text-sm text-gray-800 font-medium my-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-blue-600 hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* social Links */}
        {/* <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="text-gray-600 hover:text-purple-600"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div> */}

        <div className="flex justify-center space-x-4 mt-6">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 transition-all duration-300 ease-in-out transform hover:bg-white hover:scale-150 hover:border hover:border-white cursor-pointer"
            >
              <Icon className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors duration-300 ease-in-out" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
