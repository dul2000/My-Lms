import React from 'react';
import './addbooks.css'; // Make sure the CSS file is named App.css

function AddBooks() {
  return (
    <div className="app">
      <aside className="sidebar1">
        <div className="avatar1">
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
        <button className="logout1">Log out</button>
      </aside>
      <main className="content1">
        <div className="search-bar1">
          <input type="text" placeholder="Search..." />
          <button>&#128269;</button> {/* Search icon */}
        </div>
      <div className='Form-book'>
        <section className="add-books">
          <h3>Add Books</h3>
          <form>
            <label>
              Title of Book:
              <input type="text" placeholder="Enter the title of the book here..." />
            </label>
            <label>
              Author Name:
              <input type="text" placeholder="Enter the author name here..." />
            </label>
            <label>
              Description of Book:
              <textarea placeholder="Enter a few lines about the book here"></textarea>
            </label>
            <label>
              Category:
              <select>
                <option>Computer Network</option>
                <option>Software Engineering</option>
                <option>Science</option>
                <option>Business</option>
                {/* Add more options here */}
              </select>
            </label>
            <label>
              Number of Issues:
              <input type="text" placeholder="How many issues..." />
            </label>
            <button type="submit" className="submit1-button">ADD BOOKS</button>
          </form>
          
        </section>
        </div>
      </main>
    </div>
  );
}

export default AddBooks;