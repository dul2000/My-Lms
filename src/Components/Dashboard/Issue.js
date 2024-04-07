import React from 'react';
import './issue.css'; 

function IssueReturn() {
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
        <div className="forms-container">
          <section className="form-section">
            <h3>Issue a new book</h3>
            <form>
              <div className="form-group">
                <label htmlFor="studentId">Student ID</label>
                <input id="studentId" type="text" placeholder="Enter the student code here" />
              </div>
              <div className="form-group">
                <label htmlFor="bookId">Book ID</label>
                <input id="bookId" type="text" placeholder="Enter the book code here" />
              </div>
              <button type="submit" className="issue-btn">ISSUE BOOK</button>
            </form>
          </section>
          <section className="form-section1">
            <h3>Return book</h3>
            <form>
              <div className="form-group">
                <label htmlFor="returnBookId">Book ID</label>
                <input id="returnBookId" type="text" placeholder="Enter the book code here" />
              </div>
              <button type="submit" className="return-btn">RETURN BOOK</button>
            </form>
          </section>
        </div>
      </main>
    </div>
    
  );
}

export default IssueReturn;
