// components/DashboardLayout.js
import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h1 className="text-xl font-bold text-lime-500 mb-6">Admin Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard">
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-900">{children}</main>
    </div>
  );
};

export default DashboardLayout;
