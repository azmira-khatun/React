import React from 'react'
import Nav from '../components/Nav'

const ContactPage = () => {
  return (
    <div>
    <Nav/>
    <div style={{border: '2px solid #ccc',     
        padding: '20px',            
        borderRadius: '8px',          
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        margin: '20px auto',          
        maxWidth: '400px',           
        textAlign: 'center' }}>
        <h1>Welcome to the contact Page</h1>
        <p>Please Contact me</p>
      <p>Name:Azmira</p><br></br>
      <p>Gmail:azmiragrn@gmail.com</p><br></br>
      <p>Contact:01908943533</p>
</div>
    </div>
  )
}

export default ContactPage