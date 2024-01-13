import React from "react";
import "./App.css";
import Header from "./components/BG-Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TestingInformation from "./components/Testing-Information/TestingInformation"; 
import SignalInfo from "./components/Signal-Information/SignalInfo";
import AssessmentInfo from "./components/Assessment/AssessmentInfo";
import Visual from "./components/Visualization/Visual";



function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main-content-area"> {/* This will be the flex container for all content to the right of the sidebar */}
        <TestingInformation />
        <div className="info-and-cards-container"> {/* This will contain Signal Info and the side-by-side cards */}
          <SignalInfo />
          <div className="cards-container"> {/* This will contain the Assessment and Visualization cards */}
            <AssessmentInfo />
            <Visual />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
