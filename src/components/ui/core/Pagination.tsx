'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../button';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Pagination = ({
  page,
  totalPage,
}: {
  page: number;
  totalPage: number;
}) => {
  const [currentPage, setCurrentPage] = useState(page || 1);
  const router = useRouter();
  const pathname = usePathname();

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      router.push(`${pathname}?page=${currentPage - 1}`, { scroll: false });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      router.push(`${pathname}?page=${currentPage + 1}`, { scroll: false });
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 my-5">
      <Button
        onClick={handlePrev}
        disabled={currentPage === 1}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => {
            setCurrentPage(index + 1);
            router.push(`${pathname}?page=${index + 1}`, { scroll: false });
          }}
          key={index}
          variant={currentPage === index + 1 ? 'default' : 'outline'}
          size="sm"
          className="w-8 h-8 rounded-full flex items-center justify-center"
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
