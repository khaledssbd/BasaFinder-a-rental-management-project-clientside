const Tips = () => {
  return (
    <section className="py-14 px-5 bg-gray-100">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-6 text-gray-900">
          Tips for Finding the Perfect Rental
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              For Tenants:
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-left text-sm md:text-base">
              <li>Start your search early to avoid last-minute rush.</li>
              <li>
                Set a budget and filter properties based on your price range.
              </li>
              <li>
                Check for important amenities such as parking, Wi-Fi, and
                security features.
              </li>
              <li>Read the lease agreement carefully before signing.</li>
              <li>
                Communicate with the landlord to clarify any doubts or special
                requirements.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              For Landlords:
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-left text-sm md:text-base">
              <li>
                Ensure your rental listing is clear, with high-quality images
                and accurate descriptions.
              </li>
              <li>
                Be responsive to tenant inquiries and requests to foster a
                positive relationship.
              </li>
              <li>
                Set a fair rent based on market trends and the amenities
                offered.
              </li>
              <li>
                Screen tenants carefully to ensure they will take care of your
                property.
              </li>
              <li>
                Communicate the terms of the lease clearly, and keep
                documentation handy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
