import ManageTenantAgreements from '@/components/modules/Agreements/ManageTenantAgreements';
import { getTenantAgreements } from '@/services/Agreement';
import React from 'react';

const TenantAgreementsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getTenantAgreements(page, '10');

  return (
    <div>
      <ManageTenantAgreements agrements={data} meta={meta} page={page} />
    </div>
  );
};

export default TenantAgreementsPage;
