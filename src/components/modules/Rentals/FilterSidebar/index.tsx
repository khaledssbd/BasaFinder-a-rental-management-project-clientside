'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const FilterSidebar = () => {
  const [maxRent, setmaxRent] = useState([0]);
  const [maxBedrooms, setmaxBedrooms] = useState([0]);
  const [searchText, setSearchText] = useState('');
  const [availability, setAvailability] = useState('');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const maxRent = searchParams.get('maxRent') ? [parseInt(searchParams.get('maxRent')!)] : [0];
  // const maxBedrooms = searchParams.get('maxBedrooms') ? [parseInt(searchParams.get('maxBedrooms')!)] : [0];

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-around items-center my-10 bg-white">
      {/* Search Box */}
      <input
        className="border p-4 rounded-md focus:placeholder-transparent dark:focus:placeholder-transparent dark:placeholder-white focus:border-blue-400 dark:border-amber-500 dark:focus:border-blue-400  mx-4"
        type="text"
        onChange={e => {
          router.push(`${pathname}`);
          handleSearchQuery('searchTerm', e.target.value);
          setSearchText(e.target.value);
        }}
        value={searchText}
        placeholder="Search rentals"
      />
      <Sheet>
        <SheetTrigger className="" asChild>
          <Button
            variant="outline"
            className="p-6 text-xl font-semibold text-primary"
          >
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle className="sr-only">Fill it carefully</SheetTitle>
            <SheetDescription asChild>
              <div className="py-5">
                {/* Clear Filters */}
                <div className="text-right">
                  {searchParams.toString().length > 0 && (
                    <Button
                      onClick={() => {
                        router.push(`${pathname}`);
                        setmaxRent([0]);
                        setmaxBedrooms([0]);
                        setSearchText('');
                        setAvailability('');
                      }}
                      size="sm"
                      className="bg-black hover:bg-gray-700 ml-5"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>

                {/* Filter by Rent */}
                <div className="mb-6 py-6 border-b-2 border-gray-300">
                  <p className="text-lg font-semibold mb-4 text-primary">
                    Max-Rent
                  </p>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>৳0</span>
                    <span>৳50000</span>
                  </div>
                  <Slider
                    max={50000}
                    step={1}
                    value={maxRent}
                    onValueChange={value => {
                      setmaxRent(value);
                      handleSearchQuery('maxRent', value[0]);
                    }}
                    className="w-full"
                  />
                  <p className="text-sm mt-3 text-primary">
                    Selected Max-Rent: ৳{maxRent[0]}
                  </p>
                </div>
                {/* Filter by Bedrooms */}
                <div className="mb-6 py-6 border-b-2 border-gray-300">
                  <p className="text-lg font-semibold mb-4 text-primary">
                    Max-Bedrooms
                  </p>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>0</span>
                    <span>20</span>
                  </div>
                  <Slider
                    max={12}
                    step={1}
                    value={maxBedrooms}
                    onValueChange={value => {
                      setmaxBedrooms(value);
                      handleSearchQuery('maxBedrooms', value[0]);
                    }}
                    className="w-full"
                  />
                  <p className="text-sm mt-3 text-primary">
                    Selected Max-Bedrooms: ৳{maxBedrooms[0]}
                  </p>
                </div>

                {/* isRented */}
                <div className="mb-6">
                  <p className="text-lg font-semibold mb-4 text-primary">
                    Availability
                  </p>
                  <Select
                    value={availability}
                    onValueChange={value => {
                      setAvailability(value);
                      handleSearchQuery('isRented', value);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="false">Available</SelectItem>
                        <SelectItem value="true">Unvailable</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {/* Clear Filters */}
      <div>
        {searchParams.toString().length > 0 && (
          <Button
            onClick={() => {
              router.push(`${pathname}`);
              setmaxRent([0]);
              setmaxBedrooms([0]);
              setSearchText('');
              setAvailability('');
            }}
            size="sm"
            className="bg-black hover:bg-gray-700"
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
};
export default FilterSidebar;
