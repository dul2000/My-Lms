// React component for the Book Request Table
import React from 'react';
import './request.css'; // Make sure to create a corresponding CSS file

const BookRequestTable = () => {
  // Sample data, replace with your actual data source
  const requests = [
    { bookName: 'React in action', author: 'Mark Thomas', studentId: '21123', batch: '21.1' },
    { bookName: 'Effective C', author: 'Robert C. Seacord', studentId: '21134', batch: '23.2' },
    { bookName: 'SQL', author: 'Anthony Molinaro', studentId: '23123', batch: '21.2' },
    { bookName: 'JavaScript', author: 'Nathan Clark', studentId: '25432', batch: '22.2' },
  ];

  return (
    <div className="app">
      <aside className="sidebar2">
        <div className="avatar2">
        </div>
        <h2>Welcome, Mr. Joe!</h2>
        <nav>
          <ul>
          <li>Home</li>
        <li>Messages</li>
        <li>All books </li>
        <li>Add books</li>
        <li>Issue Requests</li>
        <li>Book Recommandation </li>
        <li>All Issued books </li>
        <li>Study room reservation</li>
          </ul>
        </nav>
        <button className="logout2">Log out</button>
      </aside>
      <main className="content2">
        <div className="search-bar2">
          <input type="text" placeholder="Search..." />
          <button>&#128269;</button> 
        </div>
    <div className="book-request-table">
      <h2>Student Requested to Admin to Issue these Book</h2>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Student ID</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.bookName}</td>
              <td>{request.author}</td>
              <td>{request.studentId}</td>
              <td>{request.batch}</td>
              <td>
                <button className="button accepted">Accepted</button>
                <button className="button rejected">Rejected</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
    </div>
  );
};

export default BookRequestTable;
