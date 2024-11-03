import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import Login from './components/Login';
import './App.css';
import { SidebarProvider } from './context/sidebarContext'; // Import SidebarProvider

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={
              <SidebarProvider> {/* Wrap with SidebarProvider */}
                <Sidebar />
                <Content />
              </SidebarProvider>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
