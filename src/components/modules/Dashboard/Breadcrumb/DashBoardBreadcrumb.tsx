'use client';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';

const DashBoardBreadcrumb = () => {
  // const currentPage = usePathname().split('/').pop();
  const currentPage = usePathname()
    .split('/')
    .filter(Boolean)
    .slice(-3)
    .map(page => page.replace('-', ' '));

  // console.log({ currentPage });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <BreadcrumbLink href="/rentals">Rentals</BreadcrumbLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BreadcrumbLink href="/about-us">About us</BreadcrumbLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BreadcrumbLink href="/terms-and-conditions">
                  Terms & Conditions
                </BreadcrumbLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BreadcrumbLink href="/privacy-policy">
                  Privacy Policy
                </BreadcrumbLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem> */}

        {currentPage.map((page, index) => (
          <span key={index} className="flex justify-center items-center">
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              <span className="capitalize">{page}</span>
            </BreadcrumbPage>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashBoardBreadcrumb;
