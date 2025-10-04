import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import ProjectDetail from "./components/ProjectDetail";
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <ProjectGrid/>
    </div>
  );
}

export default App;
