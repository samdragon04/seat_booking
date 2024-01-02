import React, { useState, useEffect } from 'react';
/*import DesignDptPage from './locations/DesignDptPage';*/

function EmployeeDropdown() {
  const [departments, setDepartments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  useEffect(() => {
    // Fetch departments from the server
    fetch('http://localhost:3001/departments')
      .then(response => response.json())
      .then(data => setDepartments(data))
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      // Fetch groups from the server
      fetch(`http://localhost:3001/groups?department=${selectedDepartment}`)
        .then(response => response.json())
        .then(data => setGroups(data))
        .catch(error => console.error('Error:', error));
    }
  }, [selectedDepartment]);

  useEffect(() => {
    if (selectedGroup) {
      // Fetch employees from the server
      fetch(`http://localhost:3001/employees?department=${selectedDepartment}&group=${selectedGroup}`)
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error:', error));
    }
  }, [selectedGroup, selectedDepartment]); 

  return (
    <div>
      <select onChange={e => setSelectedDepartment(e.target.value)}>
        <option>管理職 or 課</option>
        {departments.map(department => (
          <option key={department} value={department}>{department}</option>
        ))}
      </select>

      {selectedDepartment && (
        <select onChange={e => setSelectedGroup(e.target.value)}>
          <option>グループ</option>
          {groups.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      )}

      {selectedGroup && (
        <select>
          <option>名前</option>
          {employees.map(employee => (
            <option key={employee} value={employee}>{employee}</option>
          ))}
        </select>
      )}
       {/*<DesignDptPage employees={employees} />*/}
    </div>
  );
}

export default EmployeeDropdown;