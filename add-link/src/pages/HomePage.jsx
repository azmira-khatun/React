import React from 'react'
import Nav from '../components/Nav'

const HomePage = () => {
  return (
    <div>
<Nav/>

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
  );
};

export default HomePage