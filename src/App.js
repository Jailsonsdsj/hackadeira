import React, { useEffect } from 'react';
import { AppRoutes } from './AppRoutes';
import './App.css';


function App() {  
  useEffect(() => {
    const socket = new WebSocket('ws://0.tcp.sa.ngrok.io:12465');

    socket.onopen = () => {
        console.log('WebSocket connection established.');
      
    };

    socket.onmessage = (event) => {
        console.log('Received message from server:', event.data);
        // Handle received message here
    };

    socket.onclose = () => {
        console.log('WebSocket connection closed.');
    }
    return () => {
        socket.onopen();
        socket.onmessage();
    };

}, []);
  return (
    <AppRoutes/>
  );
}

export default App;