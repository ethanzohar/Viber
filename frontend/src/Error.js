import React, { Component } from 'react';
import './App.css';

const Error = async () => {

  const getHandler = async () => {
    const response = await fetch('http://localhost:8080/endpoints', {'Accepts': 'application/json'})
    if (response && response.ok && response.body) {
      return await response.json();
    } else {
      return "dumb"
    }
  }

  return (
    await getHandler()
  );

  // return (
  //   <div className="Error-Page">
  //     <h1>An Error occurred LMAO</h1>
  //   </div>
  // );
}

export default Error;
