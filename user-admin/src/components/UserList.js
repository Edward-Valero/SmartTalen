import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser, updateUser } from '../store/userSlice';

function UserList() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState('');

  const handleAddUser = () => {
    if (newUserName.trim()) {
      const newUser = { id: Date.now(), name: newUserName, active: true };
      dispatch(addUser(newUser));
      setNewUserName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter new user name"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => dispatch(updateUser({ ...user, active: !user.active }))}>
              {user.active ? 'Deactivate' : 'Activate'}
            </button>
            <button onClick={() => dispatch(removeUser(user.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;