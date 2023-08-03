import React from "react";

function HomePage({ employees, handleEmployeeClick }) {
  return (
    <div className="homePage">
      <h2>Employee Directory</h2>
      {/* Search bar */}
      <input type="text" placeholder="Search..." />
      {/* List of Employees */}
      <ul>
        {employees.map((employee) => (
          <li key={employee.id} onClick={() => handleEmployeeClick(employee)}>
            <img src={employee.photoUrl} alt={`Avatar for ${employee.name}`} />
            <div>
              <p>Name: {employee.name}</p>
              <p>Email: {employee.email}</p>
              <p>Company: {employee.company.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
