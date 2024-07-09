import { useState, useEffect, useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Articles', href: '#', current: false },
  // { name: 'Sign Up', href: '#', current: false },
];

function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div>
      <div className="flex justify-between items-center p-4 mb-12">
        <div className="font-bold text-3xl ml-4">
          Awaaz
        </div>
        <div className="hidden lg:flex space-x-8 mr-24">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mt-2 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <button className='border rounded-md p-2 border-black hover:bg-black hover:text-white'>
                  Sign Up
          </button>
        </div>
        <div className="lg:hidden mr-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md border"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-10">
          <div ref={sidebarRef} className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-20 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="font-bold text-2xl">
                Awaaz
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-md border"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  {item.name}
                </a>
                
              ))}
              <button className='border rounded-md p-2 border-black hover:bg-black hover:text-white'>
                  Sign Up
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Example;
