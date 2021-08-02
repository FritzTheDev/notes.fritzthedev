import { DocumentAddIcon } from "@heroicons/react/outline";

export const Navbar = ({ setDrawerOpen }) => {
  return (
    <nav className="bg-green-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between">
        <div className="flex w-full justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-white italic">
              Fritz Notes
            </h1>
          </div>
          <div className="flex">
            <div className="hidden sm:flex sm:space-x-8">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="border-transparent text-gray-100 hover:border-green-500 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                <DocumentAddIcon className="h-6 w-6 mr-1" />
                Create Note
              </button>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="border-transparent text-gray-100 hover:border-green-500 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              <DocumentAddIcon className="h-6 w-6 mr-1" />
              Create Note
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
