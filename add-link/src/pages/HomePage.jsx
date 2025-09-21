import React from 'react'
import Nav from '../components/Nav'

const HomePage = () => {
  return (
    <div>
<Nav/>
<div style={{border: '2px solid #ccc',    
        padding: '20px',              
        borderRadius: '8px',          
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        margin: '20px auto',         
        maxWidth: '500px'}}>
<h1>Welcome to the Home Page</h1>
      <p>Please fill out the form below:</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default HomePage