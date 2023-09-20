import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import BusinessTripPage from "./BusinessTripPage";
import WFHPage from "./WFHPage";
import LeavePage from "./LeavePage";
import DesignDptPage from "./locations/DesignDptPage";
import KizugawaPage from "./locations/KizugawaPage";
import TecnicumPage from "./locations/TecnicumPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMapMarkerAlt,  faSuitcase,  faHome,  faFile,} from "@fortawesome/free-solid-svg-icons";
//import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

 /*const handleLogout = () => {
    setIsAuthenticated(false);
    
  };*/

  return (
    <Router>
      <div className="App">
        {isAuthenticated && (
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/home"> <FontAwesomeIcon icon={faHome} /> ホーム </Link>
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                  <Link to="#">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 場所
                  </Link>
                  {dropdownOpen && (
                    <div className="dropdown-content">
                      <Link to="/locations/design_dpt"> <span>&#10145;</span>本社・設計室 </Link>
                      <Link to="/locations/kizugawa"> <span>&#10145;</span> 木津川 </Link>
                      <Link to="/locations/tecnicum"> <span>&#10145;</span> テクニカム </Link>
                    </div>
                  )}
                </li>
                <li> <Link to="/business_trip"> <FontAwesomeIcon icon={faSuitcase} /> 出張 </Link> </li>
                <li> <Link to="/wfh"> <FontAwesomeIcon icon={faHome} /> 在宅 </Link> </li>
                <li> <Link to="/leave"> <FontAwesomeIcon icon={faFile} /> 休暇 </Link> </li>
                {/*<li style={{ marginRight: "auto" }}>
                  <button onClick={handleLogout}>
                    <FontAwesomeIcon icon={faPowerOff} /> Logout
                  </button>
                  </li>*/}
              </ul>
            </nav>
          </header>
        )}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/locations/design_dpt" element={<DesignDptPage />} />
          <Route path="/locations/kizugawa" element={<KizugawaPage />} />
          <Route path="/locations/tecnicum" element={<TecnicumPage />} />
          <Route path="/business_trip" element={<BusinessTripPage />} />
          <Route path="/wfh" element={<WFHPage />} />
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;