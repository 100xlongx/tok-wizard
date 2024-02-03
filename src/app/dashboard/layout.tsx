import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard-layout">
      {/* Your dashboard-specific layout components here, such as a navbar, sidebar, etc. */}
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;