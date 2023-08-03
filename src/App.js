import React, { useState, useEffect } from "react";
import "./App.css";
import EmployeePage from "./components/EmployeePage";
import HomePage from "./components/HomePage";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the fake API for users
        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await usersResponse.json();

        // Fetch data from the fake API for photos
        const photosResponse = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const photosData = await photosResponse.json();

        // Merge the users and photos data using the 'id' field and include only name, email, company
        const employeesWithPhotos = usersData.map((user) => {
          const { name, email, company } = user;
          const photoUrl =
            photosData.find((photo) => photo.id === user.id)?.thumbnailUrl ||
            "https://i.pravatar.cc/80"; 
          return { name, email, company, photoUrl };
        });

        setEmployees(employeesWithPhotos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="app-container">
      <HomePage
        employees={employees}
        handleEmployeeClick={handleEmployeeClick}
      />
      <EmployeePage selectedEmployee={selectedEmployee} />
    </div>
  );
};

export default App;
