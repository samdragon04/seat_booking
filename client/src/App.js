import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import BusinessTripPage from "./Components/BusinessTripPage";
import WFHPage from "./Components/WFHPage";
import LeavePage from "./Components/LeavePage";
import DesignDptPage from "./Components/locations/DesignDptPage";
import KizugawaPage from "./Components/locations/KizugawaPage";
import TecnicumPage from "./Components/locations/TecnicumPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //Import icon vectors
import { faMapMarkerAlt,  faSuitcase,  faHome,  faFile,} from "@fortawesome/free-solid-svg-icons"; // Import icon vectors specifics
/*import socketIOClient from "socket.io-client";*/ // Import the socket.io-client library
import EmployeeDropdown from './Components/EmployeeDropdown';
import RegisterPage from './Components/RegisterPage';
import AdminLoginPage from './Components/AdminLoginPage';
import AdminPage from './Components/AdminPage';
import "./App.css";

/*const ENDPOINT = "http://172.16.208.198:3000";*/ // default ip used for react app

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  /*useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('message', (message) => {
      console.log('New message:', message);
    });

    return () => {
      socket.disconnect();
    }
  }, []);*/

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
                <Link to="#"><FontAwesomeIcon icon={faMapMarkerAlt} /> 場所</Link>
                {dropdownOpen && (
                  <div className="dropdown-content">
                    <Link to="/locations/design_dpt"><span>&#10145;</span> 本社・設計室</Link>
                    <Link to="/locations/tecnicum"><span>&#10145;</span> テクニカム</Link>
                    <Link to="/locations/kizugawa"><span>&#10145;</span> 木津川・設計室</Link>
                  </div>
                )}
              </li>
                <li> <Link to="/business_trip"> <FontAwesomeIcon icon={faSuitcase} /> 出張 </Link> </li>
                <li> <Link to="/wfh"> <FontAwesomeIcon icon={faHome} /> 在宅 </Link> </li>
                <li> <Link to="/leave"> <FontAwesomeIcon icon={faFile} /> 休暇 </Link> </li>
                <li> <EmployeeDropdown /> </li>
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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
