// src/Sidebar.jsx
// src/Sidebar.jsx
function Sidebar({ activePage, setActivePage }) {
  // This function handles clicks on menu items
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-brand">⚡ HR CRM</div>
      <nav>
        <ul>
          <li 
            className={activePage === 'employees' ? 'active' : ''}
            onClick={() => handlePageChange('employees')}
          >
            👥 Employees
          </li>
          <li 
            className={activePage === 'attendance' ? 'active' : ''}
            onClick={() => handlePageChange('attendance')}
          >
            📅 Attendance
          </li>
          <li 
            className={activePage === 'leave' ? 'active' : ''}
            onClick={() => handlePageChange('leave')}
          >
            🏖️ Leave Management
          </li>
          <li className="disabled">⚙️ Settings</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;