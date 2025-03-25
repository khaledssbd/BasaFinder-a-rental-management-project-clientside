import React, { ReactNode } from 'react';

interface BFContainerProps {
  children: ReactNode;
  className?: string;
}

const BFContainer = ({ children, className = '' }: BFContainerProps) => {
  return (
    <div className={`container mx-auto px-10 ${className}`}>{children}</div>
  );
};

export default BFContainer;
