// src/AttendanceManagement.jsx
function AttendanceManagement() {
  // Sample attendance data
  const attendanceRecords = [
    { id: 1, employee: 'Ali Khan', date: '2026-06-27', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present' },
    { id: 2, employee: 'Sara Ahmed', date: '2026-06-27', checkIn: '09:15 AM', checkOut: '06:00 PM', status: 'Late' },
    { id: 3, employee: 'John Doe', date: '2026-06-27', checkIn: '-', checkOut: '-', status: 'Absent' },
    { id: 4, employee: 'Emily Davis', date: '2026-06-27', checkIn: '08:45 AM', checkOut: '05:30 PM', status: 'Present' },
    { id: 5, employee: 'Michael Brown', date: '2026-06-26', checkIn: '09:00 AM', checkOut: '06:00 PM', status: 'Present' },
  ];

  return (
    <div className="content-area">
      <div className="page-header">
        <h1>📅 Attendance Management</h1>
        <button className="add-btn">➕ Mark Attendance</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Employee</th>
              <th>Date</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td><strong>{record.employee}</strong></td>
                <td>{record.date}</td>
                <td>{record.checkIn}</td>
                <td>{record.checkOut}</td>
                <td>
                  <span className={`status-${record.status.toLowerCase()}`}>
                    {record.status}
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

export default AttendanceManagement;