'use client';

import { BFTable } from '@/components/ui/core/BFTable/index';
import Pagination from '@/components/ui/core/Pagination';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { IMeta, TPayments } from '@/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ManageTenantPayments = ({
  payments,
  meta,
  page,
}: {
  payments: TPayments[];
  meta: IMeta;
  page: string;
}) => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  // const [selectedIds, setSelectedIds] = useState<string[] | []>([]);

  const columns: ColumnDef<TPayments>[] = [
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
      header: 'Rental',
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.rental.images[0]}
            alt={row.original.rental.location}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">
            {row.original.rental.location.slice(0, 20)}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'rent',
      header: 'Rent',
      cell: ({ row }) => <span>{row.original.rental.rent}</span>,
    },
    // {
    //   accessorKey: 'bedrooms',
    //   header: 'Bedrooms',
    //   cell: ({ row }) => <span>{row.original.rental.bedrooms}</span>,
    // },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <span className="capitalize">{row.original.status}</span>
      ),
    },
    {
      accessorKey: 'amount',
      header: 'Amount',
      cell: ({ row }) => (
        <span className="capitalize">{row.original.amount}</span>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View the rental"
            onClick={() => router.push(`/rentals/${row.original.rental._id}`)}
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Manage Payments ({meta.total})</h1>
      </div>
      <BFTable columns={columns} data={payments || []} />
      <Pagination page={Number(page)} totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageTenantPayments;
