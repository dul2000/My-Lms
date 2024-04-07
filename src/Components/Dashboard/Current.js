// App.js or another component file
import React from 'react';
import './current.css'; // Import the CSS file here

const App = () => {
  // You would fetch these from your backend in a real application
  const issues = [
    { logId: 'React in action', author: 'Mark Thomas', studentId: '21123', batch: '21.1' },
    // ... other issues
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="avatar" />
        <h2>Welcome, Mr. Joe!</h2>
        <nav className="navigation">
          <ul>
            <li>Home</li>
            {/* other list items */}
          </ul>
        </nav>
        <button className="logout">Log out</button>
      </aside>
      <main className="content">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>&#128269;</button>
        </div>
        <section className="issue-logs">
          <h3>Currently Issued Logs</h3>
          <table>
            <thead>
              <tr>
                <th>Log ID</th>
                {/* other headers */}
              </tr>
            </thead>
            <tbody>
              {issues.map((issue, index) => (
                <tr key={index}>
                  <td>{issue.logId}</td>
                  {/* other cells */}
                  <td>
                    <button className="accepted">Accepted</button>
                    <button className="rejected">Rejected</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default App;
