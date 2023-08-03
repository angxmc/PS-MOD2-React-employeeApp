import React from "react";

function EmployeePage({ selectedEmployee }) {
  return (
    <div className="employeePage">
      <h2>Employee</h2>
      {selectedEmployee ? (
        <div>
          <h3>{selectedEmployee.name}</h3>
          <p>Email: {selectedEmployee.email}</p>
          <p>Company: {selectedEmployee.company.name}</p>
          
        </div>
      ) : (
        <p>Select an employee from the list to see details.</p>
      )}
    </div>
  );
}

export default EmployeePage;
