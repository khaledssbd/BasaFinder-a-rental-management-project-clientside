import CommonManagePayments from '@/components/modules/Payments/CommonManagePayments';
// import ManageTenantPayments from '@/components/modules/Payments/ManageTenantPayments';
import { getTenantPayments } from '@/services/Payment';
import React from 'react';

const TenantPaymentsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;

  const { data, meta } = await getTenantPayments(page, '10');

  return (
    <div>
      {/* <ManageTenantPayments payments={data} meta={meta} page={page} /> */}
      <CommonManagePayments payments={data} meta={meta} page={page} />
    </div>
  );
};

export default TenantPaymentsPage;
