import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const UserAdmin = React.lazy(() => import('userAdmin/UserAdminApp'));
const TaskManagement = React.lazy(() => import('taskManagement/TaskManagementApp'));
const Reports = React.lazy(() => import('reports/ReportsApp'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/users">User Admin</Link></li>
            <li><Link to="/tasks">Task Management</Link></li>
            <li><Link to="/reports">Reports</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/users" element={<UserAdmin />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/" element={<h1>Welcome to Smart Talent Fly</h1>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;