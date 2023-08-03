import EmployeeList from "./EmployeeList";
import { useState, useEffect } from "react";

function HomePage() {
    const [contacts] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
      };
      fetchData();
    }, []);
  return (
    <div className="HomePage">
      <h2>Employee Directory</h2>
      <EmployeeList contacts={contacts}/>
    </div>
  );
}

export default HomePage;
