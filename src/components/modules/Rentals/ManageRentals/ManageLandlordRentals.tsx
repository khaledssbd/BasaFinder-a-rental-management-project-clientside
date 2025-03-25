'use client';

import { BFTable } from '@/components/ui/core/BFTable/index';
import { useRouter } from 'next/navigation';
import Pagination from '@/components/ui/core/Pagination';
// import { Checkbox } from '@/components/ui/checkbox';
import { Edit, Eye, Plus, Trash } from 'lucide-react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { IMeta, IRental } from '@/types';
import { useState } from 'react';
import Image from 'next/image';
import DeleteConfirmationModal from '@/components/ui/core/BFModal/DeleteConfirmationModal';
import { toast } from 'sonner';
import { deleteRental } from '@/services/Rental';

const ManageLandlordRentals = ({
  rentals,
  meta,
  page,
}: {
  rentals: IRental[];
  meta: IMeta;
  page: string;
}) => {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');
  // const [selectedIds, setSelectedIds] = useState<string[] | []>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDeleteRental = (rental: IRental) => {
    setSelectedId(rental?._id);
    setSelectedItem(rental?.location);
    setModalOpen(true);
  };

  const handleDeleteRentalConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteRental(selectedId);
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

  const columns: ColumnDef<IRental>[] = [
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
            src={row.original.images[0]}
            alt={row.original.location}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.location}</span>
        </div>
      ),
    },
    {
      accessorKey: 'rent',
      header: 'Rent',
      cell: ({ row }) => <span>{row.original.rent}</span>,
    },
    {
      accessorKey: 'bedrooms',
      header: 'Bedrooms',
      cell: ({ row }) => <span>{row.original.bedrooms}</span>,
    },
    {
      accessorKey: 'isRented',
      header: 'Status',
      cell: ({ row }) => (
        <span>{row.original.isRented ? 'Rented' : 'To-let'}</span>
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
            onClick={() => router.push(`/rentals/${row.original._id}`)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-green-500"
            title="Edit this Rental"
            onClick={() =>
              router.push(`/landlord/rentals/update-rental/${row.original._id}`)
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 hover:text-red-500"
            title="Delete this Rental"
            onClick={() => handleDeleteRental(row.original)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Rentals ({meta.total})</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push('/landlord/rentals/add-rental')}
            size="sm"
          >
            Add Rentals <Plus />
          </Button>
        </div>
      </div>
      <BFTable columns={columns} data={rentals || []} />
      <Pagination page={Number(page)} totalPage={meta?.totalPage} />

      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteRentalConfirm}
      />
    </div>
  );
};

export default ManageLandlordRentals;
