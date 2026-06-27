// src/LeaveManagement.jsx
function LeaveManagement() {
  // Sample leave requests
  const leaveRequests = [
    { id: 1, employee: 'Ali Khan', type: 'Annual Leave', from: '2026-07-01', to: '2026-07-05', status: 'Approved' },
    { id: 2, employee: 'Sara Ahmed', type: 'Sick Leave', from: '2026-06-28', to: '2026-06-29', status: 'Pending' },
    { id: 3, employee: 'John Doe', type: 'Personal Leave', from: '2026-06-30', to: '2026-06-30', status: 'Rejected' },
    { id: 4, employee: 'Emily Davis', type: 'Annual Leave', from: '2026-07-10', to: '2026-07-12', status: 'Pending' },
  ];

  return (
    <div className="content-area">
      <div className="page-header">
        <h1>🏖️ Leave Management</h1>
        <button className="add-btn">➕ New Leave Request</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Employee</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td><strong>{request.employee}</strong></td>
                <td>{request.type}</td>
                <td>{request.from}</td>
                <td>{request.to}</td>
                <td>
                  <span className={`status-${request.status.toLowerCase()}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveManagement;