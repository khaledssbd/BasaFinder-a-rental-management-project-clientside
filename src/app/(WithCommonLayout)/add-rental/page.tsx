import AddRentalForm from '@/components/modules/Rentals/AddRental/AddRentalForm';
import { addRentalPageMetadata } from '@/utils/Metadata';
import { addRentalPageSchemadata } from '@/utils/SchemaData';
import { Metadata } from 'next';
import Script from 'next/script';

const AddRentalPage = () => {
  const schemaData = addRentalPageSchemadata;

  return (
    <div className="flex justify-center items-center">
      <Script
        id="schema-markup-add-rental"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <AddRentalForm />
    </div>
  );
};

export default AddRentalPage;

export const metadata: Metadata = addRentalPageMetadata;
