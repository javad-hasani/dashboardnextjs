import React from 'react';

const Sidebar = () => {
  return (
    <div className=" sidebar flex h-screen font-sans text-gray-600">
      <aside className="bg-gray-800 text-white w-64">
        <div className="p-4">

          <h2 className="text-2xl  pr-3 font-bold mb-4 text-white-900">پنل مدیریت</h2>
          <ul>
            <li>
              <a href="/dashboard" className=" no-underline pi pi-check flex items-center text-sm py-2 px-4 rounded hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                داشبورد
              </a>
            </li>
            <li>
              <a href="/users" className=" no-underline flex items-center text-sm py-2 px-4 rounded hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                کاربر ها
              </a>
            </li>
            <li>
              <a href="/products" className=" no-underline flex items-center text-sm py-2 px-4 rounded hover:bg-gray-700">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                فروشگاه
              </a>
            </li>
          </ul> 
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
