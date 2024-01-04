import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [departments, setDepartments] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [newDepartment, setNewDepartment] = useState('');
  const [newGroup, setNewGroup] = useState('');
  // eslint-disable-next-line
  const [ID, setID] = useState('');
  // eslint-disable-next-line
  const [LastName, setLastName] = useState('');
  // eslint-disable-next-line
  const [FirstName, setFirstName] = useState('');
  // eslint-disable-next-line
  const [LastName_JP, setLastName_JP] = useState('');
  // eslint-disable-next-line
  const [FirstName_JP, setFirstName_JP] = useState('');
  // eslint-disable-next-line
  const [LastName_Kana, setLastName_Kana] = useState('');
  // eslint-disable-next-line
  const [FirstName_Kana, setFirstName_Kana] = useState('');
  // eslint-disable-next-line
  const [PhoneNumber, setPhoneNumber] = useState('');
  // eslint-disable-next-line
  const [Email, setEmail] = useState('');
  // eslint-disable-next-line
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/departments')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  useEffect(() => {
    if (selectedDepartment) {
      axios.get(`http://localhost:3001/groups?department=${selectedDepartment}`)
        .then(response => {
          setGroups(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
  }, [selectedDepartment]);

  const handleRegister = (event) => {
    event.preventDefault();
    const newUser = { ID, LastName, FirstName, LastName_JP, FirstName_JP, LastName_Kana, FirstName_Kana, DepartmentGrp: selectedDepartment, Grp: selectedGroup, PhoneNumber, Email, password };
    axios.post('http://localhost:3001/register', newUser)
      .then(response => {
        alert('Registration complete');
        navigate('/');
      })
      .catch(error => {
        alert('Registration failed');
      });
  };

  const handleAddDepartment = () => {
    axios.post('http://localhost:3001/addDepartment', { department: newDepartment })
    .then(response => {
      alert('Department added');
      setDepartments([...departments, newDepartment]);
      setSelectedDepartment(newDepartment);
      setNewDepartment('');
    })
    .catch(error => {
      alert('Failed to add department');
    });
  };

  const handleAddGroup = () => {
    axios.post('http://localhost:3001/addGroup', { group: newGroup })
    .then(response => {
      alert('Group added');
      setGroups([...groups, newGroup]);
      setSelectedGroup(newGroup);
      setNewGroup('');
    })
    .catch(error => {
      alert('Failed to add group');
    });
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        {/*  input fields  */}
        <label>
          <b>Department</b>
          <select value={selectedDepartment} onChange={e => setSelectedDepartment(e.target.value)}>
            {departments.map(department => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>
          <br></br>
          <input type="text" value={newDepartment} onChange={e => setNewDepartment(e.target.value)} />
          <button type="button" onClick={handleAddDepartment}>Add</button>
        </label>
        <br></br><br></br>
        <label>
          <b>Group</b>
          <select value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
            {groups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
          <br></br>
          <input type="text" value={newGroup} onChange={e => setNewGroup(e.target.value)} />
          <button type="button" onClick={handleAddGroup}>Add</button>
        </label>
        <br></br>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default RegisterPage;