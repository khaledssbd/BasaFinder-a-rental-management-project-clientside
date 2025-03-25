'use client';

import * as React from 'react';
import { useUser } from '@/context/UserContext';
import Logo from '@/assets/svgs/Logo';
import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import Link from 'next/link';
import {
  // Bot,
  // Frame,
  // LifeBuoy,
  // Map,
  // PieChart,
  // Send,
  StickyNote,
  House,
  Settings,
  SquareTerminal,
  DollarSign,
  Users,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const sidebarItems = {
  // admin sidebar-part
  admin: [
    {
      title: 'Dashboard',
      url: '/admin/dashboard',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Users',
      url: '/admin/users',
      icon: Users,
    },
    {
      title: 'Rentals',
      url: '/admin/rentals',
      icon: House,
    },
    {
      title: 'Agreements',
      url: '/admin/agreements',
      icon: StickyNote,
    },
    {
      title: 'Payments',
      url: '/admin/payments',
      icon: DollarSign,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'Profile',
          url: '/profile',
        },
        {
          title: 'Update Profile',
          url: '/profile/update-profile',
        },
        {
          title: 'Change Password',
          url: '/profile/change-password',
        },
      ],
    },
  ],

  // landlord sidebar-part
  landlord: [
    {
      title: 'Dashboard',
      url: '/landlord/dashboard',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Rentals',
      url: '#',
      icon: House,
      items: [
        {
          title: 'Add Rental',
          url: '/landlord/rentals/add-rental',
        },
        {
          title: 'Manage Rentals',
          url: '/landlord/rentals',
        },
      ],
    },
    {
      title: 'Agreements',
      url: '/landlord/agreements',
      icon: StickyNote,
    },
    {
      title: 'Payments',
      url: '/landlord/payments',
      icon: DollarSign,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'Profile',
          url: '/profile',
        },
        {
          title: 'Update Profile',
          url: '/profile/update-profile',
        },
        {
          title: 'Change Password',
          url: '/profile/change-password',
        },
      ],
    },
  ],

  // tenant sidebar-part
  tenant: [
    {
      title: 'Dashboard',
      url: '/tenant/dashboard',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Agreements',
      url: '/tenant/agreements',
      icon: StickyNote,
    },
    {
      title: 'Payments',
      url: '/tenant/payments',
      icon: DollarSign,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
      items: [
        {
          title: 'Profile',
          url: '/profile',
        },
        {
          title: 'Update Profile',
          url: '/profile/update-profile',
        },
        {
          title: 'Change Password',
          url: '/profile/change-password',
        },
      ],
    },
  ],

  // common sidebar-part that will show while loading
  common: [
    {
      title: 'Dashboard',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
      isActive: true,
      items: [
        {
          title: 'Profile',
          url: '/profile',
        },
        {
          title: 'Update Profile',
          url: '/profile/update-profile',
        },
        {
          title: 'Change Password',
          url: '/profile/change-password',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">NextMart</h2>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={
            user?.role === 'admin'
              ? sidebarItems.admin
              : user?.role === 'landlord'
              ? sidebarItems.landlord
              : user?.role === 'tenant'
              ? sidebarItems.tenant
              : sidebarItems.common
          }
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
