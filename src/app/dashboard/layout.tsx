import React from 'react';
import Navbar from '@tok-wizard/app/_components/Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      {/* Your dashboard-specific layout components here, such as a navbar, sidebar, etc. */}
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;