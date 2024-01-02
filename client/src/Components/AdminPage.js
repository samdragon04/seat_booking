import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminPage() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleAddEmployee = () => {
    // Handle add new employee logic here
  };

  const handleDeleteEmployee = (id) => {
    // Handle delete employee logic here
  };

  return (
    <div>
      <table>
        {/* Add your table headers here */}
        <tbody>
          {employees.map(employee => (
            <tr key={employee.ID}>
              {/* Add your table data here */}
              <td>
                <button onClick={() => handleDeleteEmployee(employee.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddEmployee}>Add Employee</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default AdminPage;