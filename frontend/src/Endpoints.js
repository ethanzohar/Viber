import React, { Component } from 'react';
import './App.css';

const Endpoints = () => {

  const [json, setJson] = React.useState({})
  // REACT HOOKS 

  const putHandler = async () => {
    await fetch('http://localhost:8080/endpoints/customers', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: "FIRST1 NAME",
        lastName: "LAST1 NAME"
      })
    })
  }

  const getHandler = async () => {
    const response = await fetch('http://localhost:8080/endpoints', {'Accepts': 'application/json'})
    if (response && response.ok && response.body) {
      setJson(await response.json());
    } else {
      console.log("DUMB");
    }
  }
  
  return (
    <div className="Endpoints">
      <header className="App-header">
        <button onClick={putHandler}>
          Send the request
        </button>
        {json.age && <div>Age: {json.age}</div>}
        {json.name && <div>Name: {json.name}</div>}
      </header>
    </div>
  );
}

export default Endpoints;
