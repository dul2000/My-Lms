import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login'; 
import Student from './Components/Find/Student';
import AddBooks from './Components/Dashboard/AddBooks';
import Issue from './Components/Dashboard/Issue';
import Request from './Components/Dashboard/Request';


function App() {
  return (
    <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='login' element={<Login/>}></Route>
    <Route path='dashboard' element={<Dashboard/>}></Route>
    <Route path='student' element={<Student/>}></Route>
    <Route path='addbooks' element={<AddBooks/>}></Route>
    <Route path='issue' element={<Issue/>}></Route>
    <Route path='request' element={<Request/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;



