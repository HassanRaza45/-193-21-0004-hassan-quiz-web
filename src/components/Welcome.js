// Welcome.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import profile from '../Assest/images/div.png';
export  const Welcome = () => {
  return (
    <div>
      <h1>BrainStrom</h1>
      <h2>Your Book</h2>
      <h3>Easily</h3>
      <p>World-class companies use Writealy AI writing platform to unlock brainstorming for publishing a book.</p>
    

      <div>
      <Button variant="secondary" size="lg">
          Request for demo
        </Button>
        <Button variant="secondary" size="lg">
          Try For free
        </Button>
      </div>
          <div>
      <img src={profile} alt="div"></img>
      <p>Watch the product Overview</p>
    </div>
    </div>
  );
  }
 


