import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dropdown = () => {
  const [departments, setDepartments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [names, setNames] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');

  useEffect(() => {
    axios.get('api/department').then(response => {
      setDepartments(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      axios.get(`api/group?department=${selectedDepartment}`).then(response => {
        setGroups(response.data);
      });
    }
  }, [selectedDepartment]);

  useEffect(() => {
    if (selectedGroup) {
      axios.get(`api/LastName?department=${selectedDepartment}&group=${selectedGroup}`).then(response => {
        setNames(response.data);
      });
    }
  }, [selectedDepartment, selectedGroup]);

  return (
    <div>
      <select onChange={e => setSelectedDepartment(e.target.value)}>
        {departments.map(department => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>

      <select onChange={e => setSelectedGroup(e.target.value)}>
        {groups.map(group => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>

      <select>
        {names.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
