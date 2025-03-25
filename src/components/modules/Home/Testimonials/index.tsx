import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';
import maleImage from '@/assets/images/userImage.webp';
import femaleImage from '@/assets/images/user.png';
import Marquee from 'react-fast-marquee';
// https://www.npmjs.com/package/react-fast-marquee

const testimonials = [
  {
    name: 'Rahim Hossain',
    gender: 'male',
    role: 'Tenant',
    feedback:
      'BasaFinder helped me find my preferred home quickly. The system is really smart!',
    rating: 4.8,
    image: '/users/rahim.jpg',
  },
  {
    name: 'Sadia Akter',
    gender: 'female',
    role: 'Landlord',
    feedback:
      'I easily found the perfect tenant for my apartment. The platform is very user-friendly.',
    rating: 5.0,
    image: '/users/sadia.jpg',
  },
  {
    name: 'Arif Chowdhury',
    gender: 'male',
    role: 'Tenant',
    feedback:
      'The rental process was so smooth. I completed my payment and got my new home hassle-free. Thanks, BasaFinder!',
    rating: 4.5,
    image: '/users/arif.jpg',
  },
  {
    name: 'Maya Rahman',
    gender: 'female',
    role: 'Landlord',
    feedback:
      'I had been searching for a home for months before discovering BasaFinder. The process was quick and hassle-free!',
    rating: 4.7,
    image: '/users/maya.jpg',
  },
  {
    name: 'Khaled Siddique',
    gender: 'male',
    role: 'Landlord',
    feedback:
      'BasaFinder made it so easy to find tenants who met my criteria. The verification process is top-notch!',
    rating: 4.9,
    image: '/users/khaled.jpg',
  },
  {
    name: 'Nabila Islam',
    gender: 'female',
    role: 'Tenant',
    feedback:
      'I was able to find an apartment in my desired area within a week. BasaFinder truly exceeded my expectations!',
    rating: 5.0,
    image: '/users/nabila.jpg',
  },
  {
    name: 'Ravi Kumar',
    gender: 'male',
    role: 'Tenant',
    feedback:
      'The platform allowed me to list my property with ease, and I received great offers from interested tenants within a few days.',
    rating: 4.6,
    image: '/users/ravi.jpg',
  },
  {
    name: 'Shahana Begum',
    gender: 'female',
    role: 'Landlord',
    feedback:
      'Thanks to BasaFinder, I found a home with all the amenities I wanted. Their search filters helped me make the best choice.',
    rating: 4.8,
    image: '/users/shahana.jpg',
  },
  {
    name: 'Fahad Alam',
    gender: 'male',
    role: 'Tenant',
    feedback:
      'As a landlord, I felt secure knowing that BasaFinder took care of the verification and tenant screening process.',
    rating: 4.7,
    image: '/users/fahad.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 bg-gray-100">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-6 text-gray-900">
          User Testimonials
        </h2>
        <p className="text-gray-600 mb-8">
          Success stories from users who found their perfect home through
          BasaFinder.
        </p>
        {/* https://www.npmjs.com/package/react-fast-marquee */}
        <Marquee autoFill pauseOnClick pauseOnHover speed={40}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-2 md:p-6 mx-3 md:mx-6 bg-gray-200 shadow-lg rounded-xl"
            >
              <CardContent className="flex flex-col items-center">
                <Avatar className="w-12 md:w-16 h-12 md:h-16 mb-4">
                  <Image
                    src={
                      testimonial.gender === 'male' ? maleImage : femaleImage
                    }
                    alt={testimonial.name}
                    className="rounded-full"
                  />
                </Avatar>
                <h3 className="text-base md:text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-gray-700 text-base md:text-xl font-medium my-2 md:my-4 text-center">
                  &quot;{testimonial.feedback}&quot;
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(testimonial.rating)
                          ? 'fill-yellow-500 text-transparent'
                          : 'fill-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
