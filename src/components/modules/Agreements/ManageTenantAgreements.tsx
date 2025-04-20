'use client';

import { BFTable } from '@/components/ui/core/BFTable/index';
import Pagination from '@/components/ui/core/Pagination';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { Eye } from 'lucide-react';
import { IMeta, TAgreement } from '@/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { CreatePaymentDialog } from '../Payments/CreatePaymentDialog';
import moment from 'moment';

const ManageTenantAgreements = ({
  agrements,
  meta,
  page,
}: {
  agrements: TAgreement[];
  meta: IMeta;
  page: string;
}) => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  // const [selectedIds, setSelectedIds] = useState<string[] | []>([]);

  const columns: ColumnDef<TAgreement>[] = [
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
            {row.original.rental.location.slice(0, 10)}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'rent',
      header: 'Rent',
      cell: ({ row }) => <span>{row.original.rental.rent}</span>,
    },
    {
      accessorKey: 'bedrooms',
      header: 'Bedrooms',
      cell: ({ row }) => <span>{row.original.rental.bedrooms}</span>,
    },
    {
      accessorKey: 'moveInDate',
      header: 'Move-In-Date',
      cell: ({ row }) => (
        <span>
          {moment(new Date(row.original.moveInDate)).format('DD-MMMM-YY')}
        </span>
      ),
    },
    {
      accessorKey: 'durationMonth',
      header: 'Duration Month',
      cell: ({ row }) => <span>{row.original.durationMonth}</span>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <div className="flex flex-col justify-center items-start gap-2 w-28">
          <span className="capitalize">{row.original.status}</span>
          {row.original.landlordContactNo && (
            <span className="text-green-500 font-bold">
              ({row.original.landlordContactNo})
            </span>
          )}
        </div>
      ),
    },
    {
      accessorKey: 'payment',
      header: 'Payment',
      cell: ({ row }) => (
        <>
          {row.original.status === 'approved' && (
            <CreatePaymentDialog agreement={row.original} />
          )}
        </>
      ),
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-500 hover:text-blue-500"
            title="View this Rental"
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
        <h1 className="text-xl font-bold">Manage Agreements ({meta?.total})</h1>
      </div>
      <BFTable columns={columns} data={agrements || []} />
      <Pagination page={Number(page)} totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageTenantAgreements;
