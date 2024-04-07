import React from 'react';
import './student.css';

// ... Import any icons or images used here ...

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-section">
        <SearchBar />
        <div className="content">
       
          <div className="card1 "><span>🔍 Find Book</span></div>
          <div className="card2 "><span>📚 Find Book Issue</span></div>
          <div className="card3 "><span>👥 Find Student</span></div>
        
          <div className="student-details">
           
            <div className="student-form">
              <input type="text" placeholder="Enter Book ID" />
              <button>Submit</button>
            </div>
            <div className='text'>Book Details</div>
            <div className="book-info">
            <div>Book ID: 12345</div>
             <div>Title: The Great Adventure</div>
             <div>Author: J.K. Rowling</div>
             <div>Genre: Fiction</div>
             <div>Status : Available</div>
             <div>ISBN: 978-3-16-148410-0</div>
             <div>Issued on : 03rd of Febuary 2024</div>

            
</div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebar-option'>
      <div className="avatar"></div>
      <h1>Welcome</h1>
      <h1>Mr. Joe !</h1>
      {/* Sidebar menu */}
      <ul>
        {/* Populate list with menu items */}
        <li>Home</li>
        <li>Messages</li>
        <li>All books </li>
        <li>Add books</li>
        <li>Issue Requests</li>
        <li>Book Recommandation </li>
        <li>All Issued books </li>
        <li>Study room reservation</li>
       
        {/* Add additional menu items */}
      </ul>
      </div>
    <button className="logout">Log out</button>
    </div>
    
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      {/* Replace with actual search icon */}
      <button>🔍</button>
    </div>
  );
}

export default Dashboard;

