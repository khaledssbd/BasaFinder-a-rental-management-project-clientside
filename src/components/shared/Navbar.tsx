'use client';
import Logo from '@/assets/svgs/Logo';
import { Button } from '../ui/button';
import {
  LogOut,
  Menu,
  X,
  // Heart,
  // ShoppingCart
} from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { logOut } from '@/services/Auth';
import { useUser } from '@/context/UserContext';
import { usePathname, useRouter } from 'next/navigation';
import { protectedRoutes } from '@/constants';
import NavbarLoadingSkeleton from './UserNavSkeleton';

const Navbar = () => {
  const { user, isLoading, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      name: 'Home',
      link: '/',
    },

    {
      name: 'Rentals',
      link: '/rentals',
    },

    {
      name: 'Dashboard',
      link: user ? `/${user?.role}/dashboard` : '/login',
    },

    {
      name: 'About Us',
      link: '/about-us',
    },
  ];

  const handleLogOut = () => {
    logOut();
    setIsLoading(true);
    if (protectedRoutes.some(route => pathname.match(route))) {
      router.push('/');
    }
  };

  return (
    // <header className="sticky top-0 z-10 w-full border-b bg-transparent/80 backdrop-blur">
    <header className="sticky top-0 z-20 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto h-16 px-5 md:px-10">
        <div className="relative h-16 md:h-20">
          {/* <!-- Menu & Small Device for Small Device--> */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Drawer>
              {/* <!-- Menu for Small Device--> */}
              <DrawerTrigger asChild>
                <Button
                  variant="default"
                  className="bg-transparent text-black dark:text-green-500"
                >
                  <Menu />
                  {/* <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg> */}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="text-black dark:text-green-500">
                <div className="mx-auto w-full">
                  <DrawerHeader>
                    <DrawerTitle className="sr-only">Menu</DrawerTitle>
                    <DrawerDescription className="sr-only">
                      Nav Items.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="flex justify-end items-start mr-2">
                    <DrawerClose asChild>
                      <Button variant="outline">
                        <X />
                        {/* <svg
                          className="block size-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg> */}
                      </Button>
                    </DrawerClose>
                  </div>

                  <div className="p-4">
                    {/* NavItems for Small Device */}
                    <div className="pb-3 flex flex-col justify-center items-end gap-2">
                      {navItems.map(item => (
                        <Link
                          key={item.name}
                          href={item.link}
                          className={
                            pathname === item.link
                              ? 'rounded-md border border-black text-green-500 dark:text-white  dark:border-green-500 px-3 py-2 text-sm font-medium'
                              : 'rounded-md border border-transparent px-3 py-2 text-sm font-medium hover:bg-green-500 hover:text-black'
                          }
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* logo, NavItems, Profile dropdown for Large Device */}
          <div className="flex justify-between items-center h-full">
            {/* logo for all */}
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="hidden sm:flex text-2xl font-black items-center"
              >
                <Logo />
                <h1>
                  <span className="text-primary">Basa</span>Finder
                </h1>
              </Link>
            </div>
            {/* NavItems for Large Device */}
            <div className="hidden sm:block text-black dark:text-green-500">
              <div className="flex space-x-2 md:space-x-4">
                {navItems.map(item => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={
                      pathname === item.link
                        ? 'rounded-md border-2 dark:border border-green-500 dark:border-white px-2 py-1 text-sm md:text-base font-medium'
                        : 'px-2 py-1 text-sm md:text-base font-medium hover:bg-green-500 rounded-md hover:text-black'
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* <!-- Profile dropdown for Large Device --> */}
            {isLoading ? (
              <NavbarLoadingSkeleton />
            ) : (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-6">
                <nav className="flex gap-2">
                  {user?.email ? (
                    <>
                      {user?.role === 'landlord' && (
                        <Link href="/add-rental">
                          <Button className="rounded-full">Add Rental</Button>
                        </Link>
                      )}

                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Avatar>
                            <AvatarImage src={user?.image} />
                            <AvatarFallback>User</AvatarFallback>
                          </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="z-50">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href="/profile">Profile</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href={`/${user?.role}/dashboard`}>
                              Dashboard
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="bg-red-500 cursor-pointer"
                            onClick={handleLogOut}
                          >
                            <LogOut />
                            <span>Log Out</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </>
                  ) : (
                    <Link href="/login">
                      <Button className="rounded-full" variant="default">
                        Login
                      </Button>
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
