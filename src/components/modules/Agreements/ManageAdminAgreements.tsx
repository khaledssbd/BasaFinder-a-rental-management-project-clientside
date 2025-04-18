'use client';

// import DeleteConfirmationModal from '@/components/ui/core/BFModal/DeleteConfirmationModal';
// import { deleteAgreement, updateAgreementStatus } from '@/services/Agreement';
import { BFTable } from '@/components/ui/core/BFTable/index';
import Pagination from '@/components/ui/core/Pagination';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import {
  Edit,
  Eye,
  // Trash
} from 'lucide-react';
import { IMeta, TAgreement } from '@/types';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import Image from 'next/image';
// import { toast } from 'sonner';
// import LandlordContactAddModal from './LandlordContactAddModal';
import moment from 'moment';

const ManageAdminAgreements = ({
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
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [selectedId, setSelectedId] = useState<string | null>(null);
  // const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // const handleOrderStatusChange = async (
  //   status: string,
  //   agreementId: string
  // ) => {
  //   try {
  //     const res = await updateAgreementStatus(status, agreementId);
  //     if (res.success) {
  //       toast.success(res.message);
  //     } else {
  //       toast.error(res.message);
  //     }
  //   } catch (err: any) {
  //     console.error(err?.message);
  //   }
  // };

  // const handleDeleteAgreement = (agreement: TAgreement) => {
  //   setSelectedId(agreement?._id);
  //   setSelectedItem('this agreement');
  //   setModalOpen(true);
  // };

  // const handleDeleteAgreementConfirm = async () => {
  //   try {
  //     if (selectedId) {
  //       const res = await deleteAgreement(selectedId);
  //       if (res.success) {
  //         toast.success(res.message);
  //         setModalOpen(false);
  //       } else {
  //         toast.error(res.message);
  //       }
  //     }
  //   } catch (err: any) {
  //     console.error(err?.message);
  //   }
  // };

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
    // {
    //   accessorKey: 'isRented',
    //   header: 'Rent Status',
    //   cell: ({ row }) => (
    //     <div className="flex flex-col justify-center items-center gap-2 w-fit">
    //       <span>{row.original.rental.isRented ? 'Rented' : 'To-let'}</span>
    //       {row.original.status === 'approved' ? (
    //         row.original.landlordContactNo ? (
    //           `Mine: ${row.original.landlordContactNo}`
    //         ) : (
    //           <LandlordContactAddModal agreementId={row.original._id} />
    //         )
    //       ) : (
    //         ''
    //       )}
    //     </div>
    //   ),
    // },
    // {
    //   accessorKey: 'status',
    //   header: 'Status',
    //   cell: ({ row }) => (
    //     // <span>{row.original.rental.isRented ? 'Rented' : 'To-let'}</span>
    //     <select
    //       className="p-2 border rounded-lg focus:outline-green-500"
    //       required
    //       onChange={e =>
    //         handleOrderStatusChange(e.target.value, row.original._id)
    //       }
    //       defaultValue={row.original.status}
    //     >
    //       <option value="pending">Pending</option>
    //       <option value="approved">Approved</option>
    //       <option value="rejected">Rejected</option>
    //     </select>
    //   ),
    // },
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

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit this Rental"
            onClick={() =>
              router.push(
                `/admin/rentals/update-rental/${row.original.rental._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          {/* <button
            className="text-gray-500 hover:text-red-500"
            title="Delete this Agreement"
            onClick={() => handleDeleteAgreement(row.original)}
          >
            <Trash className="w-5 h-5" />
          </button> */}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-xl font-bold">Manage Agreements ({meta.total})</h1>
      </div>
      <BFTable columns={columns} data={agrements || []} />
      <Pagination page={Number(page)} totalPage={meta?.totalPage} />

      {/* <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteAgreementConfirm}
      /> */}
    </div>
  );
};

export default ManageAdminAgreements;
