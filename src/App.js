import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import { createContext, useState } from "react";
export const store = createContext();
const App = () => {
  const[name,setName]=useState('');
  
  return (
    <div className="App">
      <store.Provider value={[name, setName]}>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        </store.Provider>
      
    </div>
  );
};

export default App;
