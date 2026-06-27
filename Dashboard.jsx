// src/Dashboard.jsx
// src/Dashboard.jsx
import { useState } from 'react';
import Sidebar from './Sidebar';
import EmployeeManagement from './EmployeeManagement';
import AttendanceManagement from './AttendanceManagement';  // We'll create this next
import LeaveManagement from './LeaveManagement';            // We'll create this next

function Dashboard() {
  // This state tracks which page is currently active
  const [activePage, setActivePage] = useState('employees');

  // This function decides which component to show based on activePage
  const renderPage = () => {
    switch (activePage) {
      case 'employees':
        return <EmployeeManagement />;
      case 'attendance':
        return <AttendanceManagement />;
      case 'leave':
        return <LeaveManagement />;
      default:
        return <EmployeeManagement />;
    }
  };

  return (
    <div className="dashboard">
      {/* Pass the active page and the setter function to Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default Dashboard;