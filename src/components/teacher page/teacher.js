import React from 'react';
import './teacher.css'; // Import the CSS file

const teacher = () => {
    const studentData = [
        {
          name: 'John Doe',
          regNumber: '12345',
          email: 'john@example.com',
          number: '1234567890',
          department: 'Computer Science',
          present: true,
        },
        {
          name: 'Jane Smith',
          regNumber: '67890',
          email: 'jane@example.com',
          number: '9876543210',
          department: 'Electrical Engineering',
          present: false,
        },
        // Add more student data objects here
      ];    

  return (
    <div className="table-container"> {/* Apply styling to the container */}
      <h2>Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration Number</th>
            <th>Email</th>
            <th>Number</th>
            <th>Department</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.regNumber}</td>
              <td>{student.email}</td>
              <td>{student.number}</td>
              <td>{student.department}</td>
              <td>{student.present ? 'Present' : 'Absent'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default teacher;
