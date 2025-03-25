const UserNavSkeleton = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-6">
      <nav className="flex gap-2">
        <div className="h-10 w-32 bg-gray-400 dark:bg-gray-700 rounded-full animate-pulse"></div>
        {/* <div className="w-10 h-10 bg-gray-400 dark:bg-gray-700 rounded-full animate-pulse"></div> */}
      </nav>
    </div>
  );
};

export default UserNavSkeleton;
