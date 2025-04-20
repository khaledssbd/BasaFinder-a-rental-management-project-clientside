'use client';

import DeleteConfirmationModal from '@/components/ui/core/BFModal/DeleteConfirmationModal';
import { BFTable } from '@/components/ui/core/BFTable/index';
import Pagination from '@/components/ui/core/Pagination';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { IMeta, TUser } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import moment from 'moment';
import { changeUserRole, changeUserStatus } from '@/services/User';

const AdminManageUsers = ({
  users,
  meta,
  page,
}: {
  users: TUser[];
  meta: IMeta;
  page: string;
}) => {
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  // const [selectedIds, setSelectedIds] = useState<string[] | []>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState<{
    status: string;
    userId: string;
  } | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleuUerRoleChange = async (role: string, userId: string) => {
    try {
      const res = await changeUserRole({ role, userId });
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const handleDeleteUser = (user: TUser) => {
    const newStatus = user.status === 'active' ? 'blocked' : 'active';
    setSelectedUserData({ userId: user._id, status: newStatus });
    setSelectedItem(user.name);
    setModalOpen(true);
  };

  const handleDeleteUserConfirm = async () => {
    try {
      if (selectedUserData) {
        const res = await changeUserStatus(selectedUserData);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<TUser>[] = [
    // {
    //   id: 'select',
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && 'indeterminate')
    //       }
    //       onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={value => {
    //         if (value) {
    //           setSelectedIds(prev => [...prev, row.original._id]);
    //         } else {
    //           setSelectedIds(selectedIds.filter(id => id !== row.original._id));
    //         }
    //         row.toggleSelected(!!value);
    //       }}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },

    {
      accessorKey: 'name',
      header: 'User',
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.image}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <span className="capitalize">{row.original.status}</span>
      ),
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated-At',
      cell: ({ row }) => (
        <span>
          {row?.original?.updatedAt
            ? moment(new Date(row.original.updatedAt)).format('DD-MMMM-YY')
            : 'N/A'}
        </span>
      ),
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: ({ row }) =>
        // <span>{row.original.rental.isRented ? 'Rented' : 'To-let'}</span>
        row.original.role === 'admin' ? (
          'Admin'
        ) : (
          <select
            className="p-2 border rounded-lg focus:outline-green-500"
            required
            onChange={e =>
              handleuUerRoleChange(e.target.value, row.original._id)
            }
            defaultValue={row.original.role}
          >
            {/* <option value="admin">Admin</option> */}
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
          </select>
        ),
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex items-center space-x-4">
          <button
            className="text-sm font-medium p-2 w-fit text-black bg-green-500 rounded-md hover:bg-red-500 hover:text-white"
            title="Delete this User"
            onClick={() => handleDeleteUser(row.original)}
          >
            {row.original.status === 'active' ? 'Block' : 'Activate'}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Manage Users ({meta?.total})</h1>
      </div>
      <BFTable columns={columns} data={users || []} />
      <Pagination page={Number(page)} totalPage={meta?.totalPage} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteUserConfirm}
        btnText={selectedUserData?.status === 'blocked' ? 'Block' : 'Activate'}
        extensionText=""
      />
    </div>
  );
};

export default AdminManageUsers;
